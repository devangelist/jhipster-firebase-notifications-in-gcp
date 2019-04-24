package com.angelchanquin.gcp.notifications.repository;

import com.angelchanquin.gcp.notifications.domain.Notifications;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Notifications entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NotificationsRepository extends JpaRepository<Notifications, Long> {

}
