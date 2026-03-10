# TP 7 : Spring Boot et Swagger


![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)
![Licence](https://img.shields.io/badge/License-MIT-green)

---

# 📖 Plan

[📝 Objectif](#-objectif)  
[📚 Contexte](#-contexte)  
[⚙️ Configuration de la base de données](#️-configuration-de-la-base-de-données)   
[🌐 Endpoints REST](#-endpoints-rest)  
[📄 Documentation API avec Swagger](#-documentation-api-avec-swagger)  
[🖥️ Interface Frontend React](#️-interface-frontend-react)  

---

# 📝 Objectif

Ce TP a pour objectif de développer une **application full-stack complète** permettant de gérer des étudiants avec une API REST Spring Boot et une interface React moderne.

Les objectifs pédagogiques sont :

- Comprendre la structure d'un **projet Spring Boot**
- Configurer **Spring Data JPA avec MySQL**
- Créer une **API REST** avec opérations CRUD
- Développer une **interface utilisateur React** moderne
- Intégrer des **graphiques avec Chart.js**
- Documenter l'API avec **Swagger**

---

# 📚 Contexte

L'application permet de gérer des étudiants à travers une **architecture en couches** :

- **Entity** → représente les données stockées en base  
- **Repository** → accès aux données via Spring Data JPA  
- **Service** → logique métier  
- **Controller REST** → expose les endpoints HTTP  
- **Frontend React** → interface utilisateur interactive  

Technologies utilisées :

- **Spring Boot 3.x**
- **Spring Data JPA**
- **MySQL**
- **React 19**
- **Vite 7**
- **Chart.js**
- **Swagger (springdoc-openapi)**

Cette structure suit l'architecture **MVC adaptée aux API REST** avec un frontend moderne.

---

# ⚙️ Configuration de la base de données

Création d'une base MySQL :

```sql
CREATE DATABASE studentdb;
```

Configuration dans `application.properties` :

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb?serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.hibernate.ddl-auto=update
```

---


### 1. Démarrer le Backend

```bash
./mvnw spring-boot:run
```
<img width="1440" height="900" alt="Swagger UI" src="https://github.com/user-attachments/assets/07036efe-4fb9-4b64-ab92-60d7f55a4ab4" />

Le serveur sera accessible sur `http://localhost:8080`

### 2. Démarrer le Frontend

```bash
cd frontend
npm install
npm run dev
```
<img width="1440" height="900" alt="Formulaire" src="https://github.com/user-attachments/assets/5f8a1841-9825-4f4e-86f4-ef9bc76cb3a4" />




L'interface sera accessible sur `http://localhost:5173`

---

# 🌐 Endpoints REST

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/students/save` | Créer un nouvel étudiant |
| `GET` | `/students/all` | Récupérer tous les étudiants |
| `GET` | `/students/count` | Compter le nombre d'étudiants |
| `GET` | `/students/byYear` | Statistiques par année |
| `DELETE` | `/students/delete/{id}` | Supprimer un étudiant |

<img width="1440" height="900" alt="Swagger Endpoints" src="https://github.com/user-attachments/assets/1aee0386-bce9-404e-816b-ebea3339d890" />
<img width="1440" height="900" alt="Liste étudiants" src="https://github.com/user-attachments/assets/dec12103-9b12-4902-bdd8-9eed336c6059" />

---

# 📄 Documentation API avec Swagger

L'interface Swagger UI est accessible à l'adresse :

```
http://localhost:8080/swagger-ui.html
```

<img width="1440" height="900" alt="Dashboard" src="https://github.com/user-attachments/assets/1ffaca97-0e02-43b9-8e92-d5a746bd2cd7" />

---

# 🖥️ Interface Frontend React

### Tableau de bord principal

L'interface React affiche un tableau de bord complet avec :

- **Cartes statistiques** : Total étudiants, nombre chargés, année en cours
- **Formulaire d'ajout** : Création de nouveaux étudiants
- **Tableau des étudiants** : Liste avec recherche et suppression
- **Graphique** : Répartition par année de naissance



<img width="1440" height="900" alt="Interface" src="https://github.com/user-attachments/assets/951aa662-5edd-4644-b17e-e9f8aa7755a2" />



