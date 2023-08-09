package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Member;
import lombok.Data;

import java.util.Date;


@Data
public class ProfileRespDto {

    private String nickname;
    private Date birth;
    private int starCount; // 작성한 별의 수
    private int followingCount;
    private int followerCount;
    private String introduction;
    private String imageUrl;
    private String zodiac; // 본인 생일에 해당하는 황도 12궁 이름
    // 다른 사람의 프로필을 확인할 때는
    // 내가 그 사람을 팔로우했는지 여부도 중요함
    private boolean isFollow;

    public ProfileRespDto(Member member, int starCount, boolean isFollow) {
        this.nickname = member.getNickname();
        this.birth = member.getBirth();
        this.starCount = starCount;
        this.followingCount = member.getFollowingCount();
        this.followerCount = member.getFollowerCount();
        this.introduction = member.getIntroduction();
        this.imageUrl = member.getImageUrl();
        this.zodiac = member.getZodiac();
        this.isFollow = isFollow;
    }
}
