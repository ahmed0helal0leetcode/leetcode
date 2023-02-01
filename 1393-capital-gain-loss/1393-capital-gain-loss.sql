# Write your MySQL query statement below
select stock_name, sum(
    (CASE
    WHEN operation = 'Buy' THEN -1
    WHEN operation = 'Sell' THEN 1
END)
    *price

) as capital_gain_loss from Stocks group by stock_name