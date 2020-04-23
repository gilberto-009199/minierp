package org.voyager.erp.config;

import java.util.Locale;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;



@Configuration
@EnableAutoConfiguration
@ComponentScan
class ApplicationConfig extends WebMvcConfigurerAdapter  {
   
    //I18n do pacote web.servlet
    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(new Locale("pt"));
        return slr;
    }
   
    //I18n
    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor lci = new LocaleChangeInterceptor();
        lci.setParamName("lang");
        return lci;
    }
    //I18n
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeChangeInterceptor());
    }
    @Bean
    public MessageSource messageSource() {
        final ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:/i18n/messages");
        messageSource.setUseCodeAsDefaultMessage(true);
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }
   
    @Override
    public Validator getValidator() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.setValidationMessageSource(messageSource() );
        return validator;
    }
    
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	
        /*registry.addResourceHandler("/css/**").addResourceLocations("/css/**");
        registry.addResourceHandler("/img/**").addResourceLocations("/img/**");
        registry.addResourceHandler("/js/**").addResourceLocations("/js/**");
        registry.addResourceHandler("/sound/**").addResourceLocations("/sound/**");
        registry.addResourceHandler("/fonts/**").addResourceLocations("/fonts/**");
        */
            registry
              .addResourceHandler("/resources/**")
              .addResourceLocations("/resources/"); 
        
    	
    	//registry.addResourceHandler("/resources/templates/**").addResourceLocations("/**");
    }
}