package com.angelchanquin.gcp.notifications.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Gcp Example.
 * <p>
 * Properties are configured in the application.yml file.
 * See {@link io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

}
