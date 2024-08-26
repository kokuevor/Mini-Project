# StudyPaddies - A Collaborative Learning Platform
## Requirements
   ### Frontend
    - Vite
    - React
  ### Backend
    - Python 3.x
    - Virtual Environment
    - Supabase
    - `requirements.txt` file with necessary dependencies

## Installation

### Clone the Repository
```bash
git clone https://github.com/bograh/Mini-Project.git
cd Mini-Project
```

### Frontend Setup
```bash
cd frontend
npm install
```

### Backend Setup
```bash
cd backend
python -m venv env
source env/bin/activate   # On Windows, use `env\Scripts\activate`
pip install -r requirements.txt
```


### Database Setup
1. **Database Configuration**:
   - Open `.env` and update the following fields with your Database Uri credentials:
     ```env
	DATABASE_URI=""
	SECRET_KEY=""
	AWS_ACCESS_KEY_ID=""
	AWS_SECRET_ACCESS_KEY=""
	AWS_DEFAULT_REGION=""
	BUCKET_NAME=""
     ```

### AWS S3 Setup


## Usage
After installing the dependencies and setting up Database, you can run the project using the following command:
- backend
  ```bash
  python app.py
  ```
- frontend
  ```bash
    npm run dev
  ```

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or feedback, please contact:
- **Developer:** Ograh Bernard Ayo
- **Supervisor:** Dr. Najim Ussiph
- **Institution:** Kwame Nkrumah University of Science and Technology
