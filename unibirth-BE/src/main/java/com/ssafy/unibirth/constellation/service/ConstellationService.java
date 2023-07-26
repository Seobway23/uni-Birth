package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.dto.ConstellationReqDto;
import com.ssafy.unibirth.constellation.dto.CreateConstellationResDto;
import com.ssafy.unibirth.constellation.dto.ReadConstellationResDto;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConstellationService {

    private final ConstellationRepository constellationRepository;
    private final MemberService memberService;
    private final PlanetService planetService;
    private final StarService starService;

    public CreateConstellationResDto create(Long memberId, ConstellationReqDto dto) {
        Member member = memberService.detailUser(memberId);
        Planet planet = planetService.findPlanetById(dto.getPlanetId());
        Constellation constellation = dto.toEntity(member, planet);
        Long createdId = constellationRepository.save(constellation).getId();
        return new CreateConstellationResDto(createdId);
    }

    public ReadConstellationResDto read(Long id) {
        Constellation con = findConstellationById(id);
        return ReadConstellationResDto.builder()
                .constellationId(con.getId())
                .completion(con.getPointCount() == con.getStarCount())
                .boardSize(con.getBoardSize())
                .lineList(stringToArray(con.getLineList()))
                .starList(starService.convertToStarListDto(con.getStarList()))
                .build();
    }

    public Constellation findConstellationById(Long id) throws NotFoundException {
        return constellationRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.CONSTELLATION_NOT_FOUND)
        );
    }

    private int[][] stringToArray(String arrayString) {
        Gson gson = new Gson();
        return gson.fromJson(arrayString, int[][].class);
    }
}