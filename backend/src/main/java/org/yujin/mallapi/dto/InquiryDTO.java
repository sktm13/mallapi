package org.yujin.mallapi.dto;

import java.time.LocalDateTime;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InquiryDTO {

    private Long ino;
    private String title;
    private String content;
    private String writer;

    private String status;
    private String reply;

    private LocalDateTime createdDate;
}