package com.masterpiece.apprenticeshipAdministrator.controllers;


import com.masterpiece.apprenticeshipAdministrator.dtos.MemberViewDto;
import com.masterpiece.apprenticeshipAdministrator.services.MemberService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@CrossOrigin
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    @PostMapping
    protected void create(@Valid @RequestBody MemberViewDto dto) {
        memberService.create(dto);
    }
}
