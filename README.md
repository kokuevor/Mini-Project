# StudyPaddies - A Collaborative Learning Platform

## Requirements

### Frontend
- **Vite**
- **React**

### Backend
- **Python 3.x**
- **Virtual Environment**
- **Supabase**
- `requirements.txt` file with necessary dependencies

## Installation

### Clone the Repository
```bash
git clone https://github.com/bograh/Mini-Project.git
cd Mini-Project
```

### Frontend Setup
Navigate to the `frontend` directory and install dependencies:
```bash
cd frontend
npm install
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Set up a virtual environment and activate it:
   ```bash
   python -m venv env
   source env/bin/activate   # On Windows, use `env\Scripts\activate`
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

### Database Configuration
1. Open the `.env` file in the `backend` directory.
2. Update the following fields with your Database and AWS credentials:
   ```python
   DATABASE_URI=""
   SECRET_KEY=""
   AWS_ACCESS_KEY_ID=""
   AWS_SECRET_ACCESS_KEY=""
   AWS_DEFAULT_REGION=""
   BUCKET_NAME=""
   ```

### AWS S3 Setup
Ensure you have your AWS S3 bucket set up as specified in the `.env` file.

## Usage

### Running the Backend
Start the backend server with:
```bash
python app.py
```

### Running the Frontend
Start the development server with:
```bash
npm run dev
```

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or feedback, please reach out to:
- **Developer:** Ograh Bernard Ayo
- **Supervisor:** Dr. Najim Ussiph
- **Institution:** Kwame Nkrumah University of Science and Technology
