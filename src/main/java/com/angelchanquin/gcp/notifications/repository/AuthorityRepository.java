package com.angelchanquin.gcp.notifications.repository;

import com.angelchanquin.gcp.notifications.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
