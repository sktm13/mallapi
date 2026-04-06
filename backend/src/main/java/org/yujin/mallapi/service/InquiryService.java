package org.yujin.mallapi.service;

import org.springframework.transaction.annotation.Transactional;
import org.yujin.mallapi.dto.InquiryDTO;
import org.yujin.mallapi.dto.PageRequestDTO;
import org.yujin.mallapi.dto.PageResponseDTO;

@Transactional
public interface InquiryService {

    PageResponseDTO<InquiryDTO> getList(String keyword, PageRequestDTO pageRequestDTO);

    Long register(InquiryDTO inquiryDTO);

    InquiryDTO get(Long ino);

    void modify(InquiryDTO inquiryDTO);

    void remove(Long ino);

    void reply(Long ino, String reply);
}