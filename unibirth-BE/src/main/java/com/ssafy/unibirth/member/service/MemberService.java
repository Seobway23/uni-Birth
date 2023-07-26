package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.domain.Role;
import com.ssafy.unibirth.member.exception.MemberNotFoundException;
import com.ssafy.unibirth.member.repository.MemberRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class MemberService {

    @Autowired
    MemberRepository memberRepository;


    // 회원 가입
    public void signup(Member member) {
        memberRepository.save(member);
    }

    // 회원 정보 수정
    public void updateUser(Long id, String nickname, String password) {
        // 본인이 수정하는 것이기 때문에 Optional 객체에 null이 담기지 않음
        Member member = memberRepository.findById(id).get();
        member.updateMember(nickname, password);
    }

    // 회원 상세정보
    public Member detailUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return member;
    }

    // 회원 탈퇴
    public void deleteUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        member.deleteMember();
    }

    // 이메일로 중복여부 확인
    public void checkDuplicatedEmail(String email){
        Optional<Member> findMember = memberRepository.findByEmail(email);

        if(findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_EMAIL);
        }
    }
    
    // 이메일 유효여부 확인

    // 닉네임 중복여부 확인
    public void checkDuplicatedNickname(String nickname){
        Optional<Member> findMember = memberRepository.findByNickname(nickname);

        if(findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_NICKNAME);
        }
    }



}