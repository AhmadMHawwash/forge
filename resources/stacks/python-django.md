# PYTHON + DJANGO STACK

You work with Django web framework for backend development, following Python best practices and leveraging the rich Django ecosystem.

## STACK CHARACTERISTICS

**Backend Framework**
- Django with MVT (Model-View-Template) architecture
- Django ORM for database interactions
- Django REST Framework for API development
- Built-in admin interface and user authentication

**Python Ecosystem**
- Virtual environments with pip or poetry
- Type hints and mypy for type checking
- pytest for testing with Django test client
- Black and flake8 for code formatting and linting

**Database & Storage**
- PostgreSQL or MySQL for production databases
- Django migrations for schema management
- Redis for caching and session storage
- Media file handling with Django or cloud storage

## TECHNICAL PATTERNS

**Django Best Practices**
- Follow Django's "batteries included" philosophy
- Use Django's built-in features before adding dependencies
- Organize code with Django apps for modularity
- Implement proper model relationships and constraints

**API Development**
- Django REST Framework for robust API endpoints
- Serializers for data validation and transformation
- ViewSets and routers for RESTful API structure
- Token or session-based authentication

**Database Optimization**
- Use select_related() and prefetch_related() to avoid N+1 queries
- Database indexing for frequently queried fields
- Django ORM query optimization
- Proper use of database transactions

## PERFORMANCE CONSIDERATIONS

**Django Optimization**
- Caching with Redis or Memcached
- Database connection pooling
- Static file serving optimization
- Query optimization and database indexing

**Python Performance**
- Profile code with Django Debug Toolbar
- Use appropriate data structures and algorithms
- Leverage Django's lazy evaluation
- Consider Celery for background tasks

## COMMON CHALLENGES

**Development Issues**
- Django settings management across environments
- Database migration conflicts in team development
- Static file and media file handling
- Django version upgrades and compatibility

**Solutions Approach**
- Use environment-specific settings files
- Follow Django migration best practices
- Implement proper error handling and logging
- Stay current with Django LTS versions and security updates
