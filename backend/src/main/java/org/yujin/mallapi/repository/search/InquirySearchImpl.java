package org.yujin.mallapi.repository.search;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.yujin.mallapi.domain.Inquiry;
import org.yujin.mallapi.domain.QInquiry;
import org.yujin.mallapi.dto.InquiryDTO;
import org.yujin.mallapi.dto.PageRequestDTO;
import org.yujin.mallapi.dto.PageResponseDTO;

import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.JPQLQueryFactory;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Repository
@RequiredArgsConstructor
@Log4j2
public class InquirySearchImpl implements InquirySearch {

    private final JPQLQueryFactory queryFactory;
    private final ModelMapper modelMapper;

    @Override
    public PageResponseDTO<InquiryDTO> search(String keyword, PageRequestDTO pageRequest) {

        QInquiry inquiry = QInquiry.inquiry;

        JPQLQuery<Inquiry> query = queryFactory.selectFrom(inquiry);

        if (keyword != null && !keyword.isEmpty()) {
            query.where(
                inquiry.title.contains(keyword)
                    .or(inquiry.content.contains(keyword))
            );
        }

        query.orderBy(inquiry.ino.desc());

        Pageable pageable = PageRequest.of(
                pageRequest.getPage() - 1,
                pageRequest.getSize()
        );

        query.offset(pageable.getOffset());
        query.limit(pageable.getPageSize());

        log.info("-----------");
        log.info(query);
        log.info("-----------");

        List<Inquiry> list = query.fetch();
        long count = query.fetchCount();

        List<InquiryDTO> dtoList = list.stream()
                .map(entity -> {
                    InquiryDTO dto = modelMapper.map(entity, InquiryDTO.class);
                    dto.setStatus(entity.getStatus().name());
                    dto.setCreatedDate(entity.getCreatedDate());
                    return dto;
                })
                .toList();

        return PageResponseDTO.<InquiryDTO>withAll()
                .dtoList(dtoList)
                .pageRequestDTO(pageRequest)
                .totalCount(count)
                .build();
    }
}