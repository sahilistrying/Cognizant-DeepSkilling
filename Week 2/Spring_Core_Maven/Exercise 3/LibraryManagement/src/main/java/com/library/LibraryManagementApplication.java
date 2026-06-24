package com.library;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;
public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("=== Running Exercise 3: Implementing Logging with Spring AOP ===");
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("[Main] Spring context successfully loaded.");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.registerNewBook("Spring Microservices in Action");
        System.out.println();
        bookService.listAvailableBooks();
        System.out.println("=== Exercise 3 Completed Successfully ===\n");
    }
}

