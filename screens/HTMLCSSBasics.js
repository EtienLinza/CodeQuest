import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { JD_CLIENT_ID, JD_CLIENT_SECRET } from '@env';
import WebView from 'react-native-webview';

const HTMLCSSBasics = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  // Steps with HTML learning examples
  const steps = [
    {
      title: 'Step 1: Introduction to HTML',
      description: 'HTML stands for Hypertext Markup Language. It is used to structure a web page and its content. Write your first HTML page below.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first webpage. I'm learning HTML!</p>
  </body>
</html>`,
    },
    {
      title: 'Step 2: HTML Elements',
      description: 'Learn about various HTML elements like headings, paragraphs, links, and images.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML Elements</title>
  </head>
  <body>
    <h1>Main Heading (h1)</h1>
    <h2>Subheading (h2)</h2>
    <p>This is a paragraph with a <a href="https://www.example.com">link</a>.</p>
    <img src="https://via.placeholder.com/150" alt="Sample Image">
  </body>
</html>`,
    },
    {
      title: 'Step 3: Creating Lists',
      description: 'Create ordered and unordered lists in HTML.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning Lists</title>
  </head>
  <body>
    <h1>Favorite Fruits</h1>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
    <h2>Steps to Make a Sandwich</h2>
    <ol>
      <li>Get bread</li>
      <li>Put ingredients</li>
      <li>Enjoy your sandwich!</li>
    </ol>
  </body>
</html>`,
    },
    {
      title: 'Step 4: HTML Forms',
      description: 'Create a simple form to collect user input.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
  </head>
  <body>
    <h1>Contact Us</h1>
    <form action="/submit" method="POST">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>`,
    },
    {
      title: 'Step 5: CSS Basics',
      description: 'Learn how to style your HTML using CSS.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Styled Webpage</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Styled Webpage</h1>
    <p>This is a webpage styled with basic CSS.</p>
  </body>
</html>`,
    },
    {
      title: 'Step 6: Building a Complete Webpage',
      description: 'Build a complete webpage by combining all the elements learned so far.',
      exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Complete Webpage</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #fff;
        margin: 0;
        padding: 0;
      }
      header {
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        text-align: center;
      }
      nav {
        padding: 15px;
        background-color: #333;
      }
      nav a {
        color: white;
        margin: 0 15px;
        text-decoration: none;
      }
      main {
        padding: 20px;
      }
      footer {
        background-color: #4CAF50;
        color: white;
        text-align: center;
        padding: 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    <main>
      <h2>About Me</h2>
      <p>This is a simple HTML and CSS webpage. I learned how to create and style this page!</p>
    </main>
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>`,
    },
  ];

  // Function to send the code to JDoodle API and get the output
  const executeCode = async () => {
    const program = {
      script: code,
      language: 'html',
      versionIndex: '0',
      clientId: JD_CLIENT_ID,
      clientSecret: JD_CLIENT_SECRET,
    };

    try {
      const response = await axios.post('https://api.jdoodle.com/v1/execute', program);
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error executing code:', error.response || error.message);
      setOutput('An error occurred while running your code.');
    }
  };

  const handleStepChange = (index) => {
    setCurrentStep(index);
    setCode(steps[index].exampleCode);
    setOutput(''); // Clear output when changing steps
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Learn HTML - Interactive Course</Text>

      {/* Step Navigation Buttons */}
      <View style={styles.stepContainer}>
        {steps.map((step, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.stepButton, currentStep === index && styles.activeStepButton]}
            onPress={() => handleStepChange(index)}
          >
            <Text style={styles.stepText}>{step.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Current Step Content */}
      <View style={styles.currentStep}>
        <Text style={styles.currentStepTitle}>{steps[currentStep].title}</Text>
        <Text style={styles.currentStepDescription}>{steps[currentStep].description}</Text>

        {/* Code Input Area */}
        <TextInput
          style={styles.codeInput}
          multiline
          value={code}
          onChangeText={setCode}
          placeholder="Type or modify your code here..."
        />

        {/* Run Button */}
        <Button title="Run Code" onPress={executeCode} />

        {/* Output Area */}
        {output ? (
          <View style={styles.outputContainer}>
            <Text style={styles.outputLabel}>Output:</Text>
            <Text style={styles.outputText}>{output}</Text>
          </View>
        ) : null}
        
        {/* Display HTML Output using WebView */}
        <WebView 
          originWhitelist={['*']} 
          source={{ html: code }} 
          style={{ marginTop: 20, height: 400 }} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  stepContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  stepButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  activeStepButton: {
    backgroundColor: '#388E3C',
  },
  stepText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  currentStep: { marginTop: 16 },
  currentStepTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  currentStepDescription: { fontSize: 16, marginBottom: 10 },
  codeInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    fontSize: 16,
    minHeight: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  outputContainer: { marginTop: 20 },
  outputLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  outputText: { fontSize: 16, color: '#333' },
});

export default HTMLCSSBasics;
