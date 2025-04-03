* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.calculator {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
}

h2 {
    color: white;
    margin-bottom: 10px;
}

#display {
    width: 100%;
    height: 50px;
    font-size: 24px;
    text-align: right;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #333;
    color: white;
    margin-bottom: 10px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

button {
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #444;
    color: white;
    transition: 0.2s;
}

button:hover {
    background: #666;
}

button:nth-child(3), button:nth-child(4), button:last-child {
    background: #ff9800;
}

button:nth-child(3):hover, button:nth-child(4):hover, button:last-child:hover {
    background: #e68900;
}
