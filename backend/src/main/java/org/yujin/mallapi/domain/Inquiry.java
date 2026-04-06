package org.yujin.mallapi.domain;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "tbl_inquiry")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ino;

    private String title;
    private String content;
    private String writer;

    @Enumerated(EnumType.STRING)
    private InquiryStatus status;
    private String reply;

    @CreationTimestamp // 작성일시 자동생성
    private LocalDateTime createdDate;


    public void changeTitle(String title) {
        this.title = title;
    }

    public void changeContent(String content) {
        this.content = content;
    }

    public void changeReply(String reply) {
        this.reply = reply;
        this.status = InquiryStatus.DONE;
    }

    
}