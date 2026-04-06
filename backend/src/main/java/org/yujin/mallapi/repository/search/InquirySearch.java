package org.yujin.mallapi.repository.search;

import org.yujin.mallapi.dto.InquiryDTO;
import org.yujin.mallapi.dto.PageRequestDTO;
import org.yujin.mallapi.dto.PageResponseDTO;

public interface InquirySearch {

    PageResponseDTO<InquiryDTO> search(String query, PageRequestDTO pageRequestDTO);

}