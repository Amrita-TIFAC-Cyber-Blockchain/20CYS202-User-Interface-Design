# 20CYS202 - User Interface Design ![](https://img.shields.io/badge/-Live-brightgreen)
![](https://img.shields.io/badge/Batch-21CYS-lightgreen) ![](https://img.shields.io/badge/UG-blue) ![](https://img.shields.io/badge/Subject-UID-blue)

20CYS202  - User Interface Design - 3rd Sem - B.E. CSE(CYS) - ASE, CBE

## Quick Pointers

### Valid Script 

- **Within Head**

```
<head>
<script>
function uiDemo() {
  document.getElementById("demo").innerHTML = "Please Remember this";
}
</script>
</head>
```

- **Within Body**

```
<body>
<script>
function uiDemo() {
  document.getElementById("demo").innerHTML = "Please Remember this";
}
</script>
</body>
```

- **From External Source**

```
<script src="https://amrita-tifac-cyber-blockchain.github.io/GEIN-Distributed-Geographical-Indication-Registry/GEIN/js/bootstrap.min.js"></script>
<script src="demo.js"></script>

```

### JavaScript Code Snippets

- **Printing to Browser Console**

```
console.log('20CYS202 User Interface Design!');
```

- **Printing to HTML Document**

```
document.write('20CYS202 User Interface Design!');
```

- **Get input from user using _prompt_**

```
// taking name as an input from the user
const name = prompt("Enter your name: ")
```

- **Variable Declaration using _const_ and perform addition**
 
```
const fnum = 26;
const snum = 18;

// Adding two numbers
const sum = num1 + num2;

// Display the sum
console.log('The Sum of ' + fnum + ' and ' + snum + ' is: ' + sum);
```

- **Example of Built-in Functions or library**

```
Math.sqrt(number);
```

```
const number = 25;

const sqrtn = Math.sqrt(number);
console.log('The square root of ' + number + ' is ' + sqrtn);
```

- **_const_ is a block scope type**

```
const a = 44;

// This will output 44
console.log(a);

// constants are block-scoped
{
    const a = 18;
    
    // This will output 18
    console.log(a);
}

// This will output 44
console.log(a);
```

- **Declaring an Array**

```
const exams = ['periodicals1', 'periodicals2', 'endsemester'];
console.log(exams);
```
