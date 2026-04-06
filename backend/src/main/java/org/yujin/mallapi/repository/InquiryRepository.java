package org.yujin.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yujin.mallapi.domain.Inquiry;
import org.yujin.mallapi.repository.search.InquirySearch;

public interface InquiryRepository extends JpaRepository<Inquiry, Long>, InquirySearch{
}