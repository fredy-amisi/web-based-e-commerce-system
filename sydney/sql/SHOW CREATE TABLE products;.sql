
UPDATE `products`
SET `price` = CASE
    WHEN `id` = 2 THEN 220.00
    WHEN `id` = 3 THEN 230.00
    WHEN `id` = 3 THEN 330.00
    WHEN `id` = 3 THEN 430.00
    WHEN `id` = 3 THEN 530.00
    ELSE `price`  -- Keep existing price for other products
    END;
