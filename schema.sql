-- Tabla de usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,        -- Identificador único de usuario
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,      -- Contraseña cifrada
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de dietas
CREATE TABLE diets (
    id SERIAL PRIMARY KEY,          
    user_id INT NOT NULL,                
    date DATE NOT NULL,       
    is_completed BOOLEAN DEFAULT FALSE,           
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabla de tipos de comida (para evitar repetición de texto en 'meal_type')
CREATE TABLE meal_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabla de comidas
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,          -- Identificador único de la comida
    diet_id INT NOT NULL,                -- Relación con la tabla de dietas
    meal_type_id INT NOT NULL,            -- Relación con la tabla meal_types
    FOREIGN KEY (diet_id) REFERENCES diets(id) ON DELETE CASCADE,
    FOREIGN KEY (meal_type_id) REFERENCES meal_types(id) ON DELETE CASCADE
);

-- Tabla de categorías de alimentos
CREATE TABLE food_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabla de alimentos
CREATE TABLE foods (
    id SERIAL PRIMARY KEY,          -- Identificador único del alimento
    name VARCHAR(100) NOT NULL,          -- Nombre del alimento
    calories INT,                        -- Calorías por porción
    protein FLOAT,                       -- Proteínas por porción (en gramos)
    carbs FLOAT,                         -- Carbohidratos por porción (en gramos)
    fats FLOAT,                          -- Grasas por porción (en gramos)
    description TEXT,                    -- Descripción adicional
    api_source VARCHAR(255),             -- Fuente de la API de alimentos
    category_id INT,                     -- Relación con la categoría del alimento
    image_url VARCHAR(255),              -- URL de imagen del alimento (opcional)
    brand VARCHAR(100),                  -- Marca del alimento (opcional)
    FOREIGN KEY (category_id) REFERENCES food_categories(id) ON DELETE SET NULL
);

-- Tabla de relación entre comidas y alimentos
CREATE TABLE meal_foods (
    id SERIAL PRIMARY KEY,       -- Identificador único de la relación
    meal_id INT NOT NULL,                  -- Relación con la tabla de comidas
    food_id INT NOT NULL,                  -- Relación con la tabla de alimentos
    quantity FLOAT NOT NULL,               -- Cantidad consumida en la comida
    unit VARCHAR(50) NOT NULL,             -- Unidad de medida (gramos, porciones, etc.)
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE,
    FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE CASCADE
);

-- Tabla de calendarios (semanales o mensuales)
CREATE TABLE calendars (
    id SERIAL PRIMARY KEY,       -- Identificador único del calendario
    user_id INT NOT NULL,                 -- Relación con el usuario dueño del calendario
    start_date DATE NOT NULL,             -- Fecha de inicio (puede ser el primer día del mes o de la semana)
    calendar_type VARCHAR(50) NOT NULL,   -- Tipo de calendario (semanal o mensual)
    diet_id INT,                         -- Relación con la dieta
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (diet_id) REFERENCES diets(id) ON DELETE CASCADE
);

-- Tabla de progreso de cada día
CREATE TABLE progress_records (
    id SERIAL PRIMARY KEY,        -- Identificador único del registro
    user_id INT NOT NULL,                  -- Relación con la tabla de usuarios
    calories_consumed INT,                 -- Calorías consumidas en el día
    proteins_consumed FLOAT,               -- Proteínas consumidas en el día
    carbs_consumed FLOAT,                 -- Carbohidratos consumidos en el día
    fats_consumed FLOAT,                  -- Grasas consumidas en el día
    is_completed BOOLEAN DEFAULT FALSE,    -- Si el día ha sido marcado como cumplido
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabla de estadísticas del usuario
CREATE TABLE statistics (
    id SERIAL PRIMARY KEY,           -- Identificador único de la estadística
    user_id INT NOT NULL,                 -- Relación con el usuario
    total_calories INT,                   -- Calorías totales consumidas por el usuario
    total_proteins FLOAT,                 -- Proteínas totales consumidas
    total_carbs FLOAT,                    -- Carbohidratos totales consumidos
    total_fats FLOAT,                     -- Grasas totales consumidas
    total_days_completed INT,             -- Total de días cumplidos
    period_start DATE,                    -- Fecha de inicio del período
    period_end DATE,                      -- Fecha de fin del período
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
