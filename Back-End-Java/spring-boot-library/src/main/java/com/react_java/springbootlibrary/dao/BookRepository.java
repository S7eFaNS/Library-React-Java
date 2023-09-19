package com.react_java.springbootlibrary.dao;

import com.react_java.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
