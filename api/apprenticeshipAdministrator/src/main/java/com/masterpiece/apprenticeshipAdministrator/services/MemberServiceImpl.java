package com.masterpiece.apprenticeshipAdministrator.services;

import com.masterpiece.apprenticeshipAdministrator.dtos.MemberViewDto;
import com.masterpiece.apprenticeshipAdministrator.entities.Member;
import com.masterpiece.apprenticeshipAdministrator.repositories.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl  implements MemberService {
    private  final MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public void create(MemberViewDto dto) {
        Member member= new Member();
        populateAndSave(dto, member);

    }

    private void populateAndSave(MemberViewDto dto, Member member){
        member.setPassword(dto.getPassword());
        member.setUsername((dto.getUsername()));
        memberRepository.save(member);

    }

}

