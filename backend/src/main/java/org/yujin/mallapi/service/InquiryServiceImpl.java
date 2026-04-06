package org.yujin.mallapi.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.yujin.mallapi.domain.Inquiry;
import org.yujin.mallapi.domain.InquiryStatus;
import org.yujin.mallapi.dto.InquiryDTO;
import org.yujin.mallapi.dto.PageRequestDTO;
import org.yujin.mallapi.dto.PageResponseDTO;
import org.yujin.mallapi.repository.InquiryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class InquiryServiceImpl implements InquiryService {

    private final InquiryRepository inquiryRepository;
    private final ModelMapper modelMapper;

    @Override
    public PageResponseDTO<InquiryDTO> getList(String keyword, PageRequestDTO pageRequestDTO) {
        return inquiryRepository.search(keyword, pageRequestDTO);
    }

    @Override
    public Long register(InquiryDTO dto) {

        Inquiry inquiry = Inquiry.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .writer(dto.getWriter())
                .status(InquiryStatus.WAIT)
                .build();

        return inquiryRepository.save(inquiry).getIno();
    }

    @Override
    public InquiryDTO get(Long ino) {

        Optional<Inquiry> result = inquiryRepository.findById(ino);
        Inquiry inquiry = result.orElseThrow();

        return modelMapper.map(inquiry, InquiryDTO.class);
    }

    @Override
    public void modify(InquiryDTO dto) {

        Inquiry inquiry = inquiryRepository.findById(dto.getIno()).orElseThrow();

        inquiry.changeTitle(dto.getTitle());
        inquiry.changeContent(dto.getContent());

        inquiryRepository.save(inquiry);
    }

    @Override
    public void remove(Long ino) {
        inquiryRepository.deleteById(ino);
    }

    @Override
    public void reply(Long ino, String reply) {

        Inquiry inquiry = inquiryRepository.findById(ino).orElseThrow();

        inquiry.changeReply(reply);
    }
}