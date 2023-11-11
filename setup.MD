Setting up a full-stack web application with Django, Django REST Framework (DRF), React, Docker, PostgreSQL, and Git involves multiple steps. Below is a step-by-step guide to get everything up and running.
### Step 1: Setting Up a Django Project with DRF
1. **Install Python**: Ensure Python is installed on your system.
2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. **Install Django and Django REST Framework**:
   ```bash
   pip install django djangorestframework
   ```
4. **Start a New Django Project**:
   ```bash
   django-admin startproject myproject
   cd myproject
   ```
5. **Create a New Django App** (e.g., `api`):
   ```bash
   python manage.py startapp api
   ```
6. **Configure DRF in `settings.py`**:
   - Add `‘rest_framework’` and your app (e.g., `‘api’`) to `INSTALLED_APPS`.
7. **Create Models and Serializers**:
   - Define your data models in `api/models.py`.
   - Create serializers in `api/serializers.py`.
8. **Set Up Views and URLs**:
   - Define views in `api/views.py`.
   - Set up URL patterns in `api/urls.py` and link them in `myproject/urls.py`.
### Step 2: Setting Up a React Frontend
1. **Install Node.js and npm**.
2. **Create a New React App**:
   ```bash
   npx create-react-app my-react-app
   cd my-react-app
   ```
3. **Install Additional Dependencies** (if needed, like Axios for HTTP requests):
   ```bash
   npm install axios
   ```
### Step 3: Docker Configuration for Both Dev and Prod
1. **Install Docker** on your system.
2. **Create a `Dockerfile` for Django**:
   - This file will contain instructions to build the Docker image for your Django app.
3. **Create a `Dockerfile` for React**:
   - Similar to Django, but tailored for a Node.js environment.
4. **Use `docker-compose.yml`**:
   - Define services (Django, React, PostgreSQL).
   - Configure volumes for persistent data.
   - Set up networking between containers.
### Step 4: Setting Up PostgreSQL Database
1. **Update Django `settings.py`**:
   - Configure the `DATABASES` setting to use PostgreSQL.
2. **Add PostgreSQL Service in `docker-compose.yml`**:
   - Define the PostgreSQL Docker container.
   - Set environment variables like `POSTGRES_DB`, `POSTGRES_USER`, and `POSTGRES_PASSWORD`.
### Step 5: Version Control with Git
1. **Initialize a Git Repository**:
   ```bash
   git init
   ```
2. **Add a `.gitignore` File**:
   - Include `venv/`, `node_modules/`, and other unnecessary files.
3. **Make Initial Commit**:
   ```bash
   git add .
   git commit -m “Initial commit”
   ```
4. **Link to Remote Repository** (GitHub/GitLab):
   ```bash
   git remote add origin <repository-url>
   git push -u origin master
   ```
### Final Steps and Testing
- **Run Docker Containers**:
  ```bash
  docker-compose up
  ```
- **Test the Application**:
  - Ensure the Django app connects to PostgreSQL.
  - Test the React app’s ability to communicate with the Django backend.
- **Development and Production Configurations**:
  - You might have different Docker configurations for development and production. For production, consider things like setting `DEBUG` to False in Django, using a web server like Gunicorn, and setting up an HTTPS server for React.
This setup gives you a robust development environment with the flexibility to scale into a production setting. Remember, each step can have its complexities, so it’s important to troubleshoot and debug as you go along.