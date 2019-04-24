package com.angelchanquin.gcp.notifications.service;

import com.angelchanquin.gcp.notifications.domain.Notifications;
import com.angelchanquin.gcp.notifications.repository.NotificationsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Notifications.
 */
@Service
@Transactional
public class NotificationsService {

    private final Logger log = LoggerFactory.getLogger(NotificationsService.class);

    private final NotificationsRepository notificationsRepository;

    public NotificationsService(NotificationsRepository notificationsRepository) {
        this.notificationsRepository = notificationsRepository;
    }

    /**
     * Save a notifications.
     *
     * @param notifications the entity to save
     * @return the persisted entity
     */
    public Notifications save(Notifications notifications) {
        log.debug("Request to save Notifications : {}", notifications);
        return notificationsRepository.save(notifications);
    }

    /**
     * Get all the notifications.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<Notifications> findAll() {
        log.debug("Request to get all Notifications");
        return notificationsRepository.findAll();
    }


    /**
     * Get one notifications by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Notifications> findOne(Long id) {
        log.debug("Request to get Notifications : {}", id);
        return notificationsRepository.findById(id);
    }

    /**
     * Delete the notifications by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Notifications : {}", id);
        notificationsRepository.deleteById(id);
    }
}
