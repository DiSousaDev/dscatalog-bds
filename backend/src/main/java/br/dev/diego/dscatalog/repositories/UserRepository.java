package br.dev.diego.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.dev.diego.dscatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
