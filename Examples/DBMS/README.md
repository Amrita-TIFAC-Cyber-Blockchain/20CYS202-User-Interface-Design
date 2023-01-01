# DBMS Examples

## Joins

#### Table Description

Please create a table as shown in the below schema. Two tables
- cys
- wicys

<p align="center">
  <img src="images/table_description.png" width="600">  
</p>

#### Table Values

We have entered the values into both these tables as seen (example values).

<p align="center">
  <img src="images/tables.png" width="400">  
</p>

#### Join

```
select cys.roll_no, cys.name, cys.cgpa, wicys.designation from wicys join cys ON cys.roll_no=wicys.roll_no;
```

<p align="center">
  <img src="images/join.png" width="800">  
</p>

#### Left Outer Join

```
select cys.roll_no, cys.name, cys.cgpa, wicys.designation from cys left outer join wicys ON cys.roll_no=wicys.roll_no;
```

<p align="center">
  <img src="images/left_outer_join.png" width="800">  
</p>

#### Right Outer Join

```
select cys.roll_no, cys.name, cys.cgpa, wicys.designation from wicys right outer join cys ON cys.roll_no=wicys.roll_no;
```

<p align="center">
  <img src="images/right_outer_join.png" width="800">  
</p>

#### Inner Join

```
select cys.roll_no, cys.name, cys.cgpa, wicys.designation from wicys inner join cys ON cys.roll_no=wicys.roll_no;
```

<p align="center">
  <img src="images/inner_join.png" width="800">  
</p>

#### Full Join

```
select * from wicys full join cys;
```

<p align="center">
  <img src="images/full_join.png" width="600">  
</p>


