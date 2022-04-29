<?php
$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$personality = $_POST['personality'];
$os = $_POST['os'];
$min = $_POST['min'];
$max = $_POST['max'];

echo 'Name: ' . $name . '<br>';
echo 'Gender: ' . $gender . '<br>';
echo 'Age: ' . $age . '<br>';
echo 'Personality Type: ' . $personality . '<br>';
echo 'Favourite OS: ' . $os . '<br>';
echo 'Seeking Age: ' . $min . ' to ' . $name;