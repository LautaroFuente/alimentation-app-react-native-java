CREATE TABLE users (
    id SERIAL PRIMARY KEY,        -- Identificador único de usuario
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,      -- Contraseña cifrada
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE diets (
    id SERIAL PRIMARY KEY,          
    user_id INT NOT NULL,                
    date DATE NOT NULL,       
    is_completed BOOLEAN DEFAULT FALSE,           
    is_active BOOLEAN DEFAULT TRUE,      -- Indica si la dieta es activa
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,          -- Identificador único de la comida
    diet_id INT NOT NULL,                -- Relación con la tabla de dietas
    meal_type VARCHAR(50) NOT NULL,      -- Tipo de comida (desayuno, almuerzo, cena, merienda)
    FOREIGN KEY (diet_id) REFERENCES diets(diet_id) ON DELETE CASCADE
);

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,          -- Identificador único del alimento
    name VARCHAR(100) NOT NULL,          -- Nombre del alimento
    calories INT,                        -- Calorías por porción
    protein FLOAT,                       -- Proteínas por porción (en gramos)
    carbs FLOAT,                         -- Carbohidratos por porción (en gramos)
    fats FLOAT,                          -- Grasas por porción (en gramos)
    description TEXT,                    -- Descripción adicional
    api_source VARCHAR(255)              -- Fuente de la API de alimentos
);

CREATE TABLE meal_foods (
    id SERIAL PRIMARY KEY,       -- Identificador único de la relación
    meal_id INT NOT NULL,                  -- Relación con la tabla de comidas
    food_id INT NOT NULL,                  -- Relación con la tabla de alimentos
    quantity FLOAT NOT NULL,               -- Cantidad consumida en la comida
    FOREIGN KEY (meal_id) REFERENCES meals(meal_id) ON DELETE CASCADE,
    FOREIGN KEY (food_id) REFERENCES foods(food_id) ON DELETE CASCADE
);

CREATE TABLE calendars (
    id SERIAL PRIMARY KEY,       -- Identificador único del calendario
    user_id INT NOT NULL,                 -- Relación con el usuario dueño del calendario
    start_date DATE NOT NULL,             -- Fecha de inicio (puede ser el primer día del mes o de la semana)
    calendar_type VARCHAR(50) NOT NULL,   -- Tipo de calendario (semanal o mensual)
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE progress_records (
    id SERIAL PRIMARY KEY,        -- Identificador único del registro
    user_id INT NOT NULL,                  -- Relación con la tabla de usuarios
    calories_consumed INT,                 -- Calorías consumidas en el día
    is_completed BOOLEAN DEFAULT FALSE,    -- Si el día ha sido marcado como cumplido
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE statistics (
    id SERIAL PRIMARY KEY,           -- Identificador único de la estadística
    user_id INT NOT NULL,                 -- Relación con el usuario
    total_calories INT,                   -- Calorías totales consumidas por el usuario
    total_days_completed INT,             -- Total de días cumplidos
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
