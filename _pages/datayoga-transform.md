---
layout: datayoga-transform
permalink: /datayoga-transform/
page_header_image: "/assets/images/page_header_2.jpg"
title: "Low-Code Data Pipelines Framework"

slider:
  - image:
      src: "/assets/images/transform/transform-hero.jpg"
      alt: "Low-Code Data Pipeline Framework - DataYoga Transform"
    heading: "Low-Code Data Pipeline Framework"
    heading2: "Build Data & AI Pipelines with Simple YAML"
    text: "Create flexible pipelines in minutes using simple YAML configurations. Perfect for streaming data, AI transformations, batch processing, and real-time integrations."
    button:
      name: "Get Started"
      link: "https://github.com/datayoga-io/datayoga"

transform-features:
  heading: "The Pipeline Framework You've Been Looking For!"
  text: "Simple solutions for common data pipeline challenges"
  list:
    - name: "Stream Processing"
      icon: "/assets/images/informatica-to-dbt/checkmark.png"
      listitem:
        - name: "Connect to Kafka topics instantly"
        - name: "Process message queues effortlessly"
        - name: "Handle real-time data feeds"
    - name: "Simple Configuration"
      icon: "/assets/images/informatica-to-dbt/checkmark.png"
      listitem:
        - name: "Define pipelines in YAML"
        - name: "No streaming code required"
        - name: "Built-in error handling"
    - name: "Built-in Integrations"
      icon: "/assets/images/informatica-to-dbt/checkmark.png"
      listitem:
        - name: "Connect to databases directly"
        - name: "Process API data streams"
        - name: "Write to vector stores"

how-it-works:
  heading: "Simple by Design"
  text: "Transform any data source to any target with simple YAML configurations. DataYoga Transform handles the rest."
  image:
    src: "/assets/images/transform/datayoga-transform-flow.png"
    alt: "DataYoga Transform Pipeline Flow"

quickstart:
  heading: "Get Started in Minutes"
  text: "Run your first data pipeline with our built-in example"
  steps:
    - bullet: "1"
      title: "Install DataYoga"
      subtitle1: "Using pip package manager"
      text: "Run 'pip install datayoga' to install the framework"
    
    - bullet: "2"
      title: "Initialize Project"
      subtitle1: "Create sample project"
      text: "Run 'datayoga init hello_world' to create a new project with examples"
    
    - bullet: "3"
      title: "Run Sample Pipeline"
      subtitle1: "See it in action"
      text: "Execute 'datayoga run sample.hello' to transform and display sample user data"

runtime-features:
  heading: "Built for Real-World Applications"
  features_left:
    heading: "Processing Features"
    list:
      - name: "Back-pressure handling"
      - name: "Automatic retries"
      - name: "Stream checkpointing"
      - name: "Rate limiting"
  features_right:
    heading: "Integration Support"
    list:
      - name: "Apache Kafka"
      - name: "RabbitMQ"
      - name: "AWS SQS"
      - name: "REST APIs"

use-cases:
  heading: "Common Use Cases"
  text: "Real solutions for real streaming challenges"
  list:
    - title: "Stream to AI Vector Store"
      description: "Transform streams into embeddings for real-time AI search and recommendations"
    - title: "Event Stream Processing"
      description: "Process Kafka topics and message queues with simple YAML configuration"
    - title: "Real-time Data Feeds"
      description: "Handle IoT sensors, logs, and live data streams without complex code"
    - title: "API Integration"
      description: "Connect and transform API data streams automatically"
   
examples:
  heading: "Pipeline Examples"
  text: "Flexible integrations across diverse sources and targets " 
  list:
    - title: "Kafka to Vector DB"
      yaml: |
        source:
          type: kafka
          topic: user-content
        transform:
          type: embedding
          model: openai  
        target:
          type: vectordb
          store: pinecone  # or milvus/weaviate/etc
          index: real-time-content
        
    - title: "API to Queue"
      yaml: |
        source:
          type: rest-api
          endpoint: /events
        target:
          type: rabbitmq
    - title: "Log Processing"
      yaml: |
        source:
          type: file
          pattern: "*.log"
        target:
          type: elasticsearch

faq:
  heading: "Frequently Asked Questions"
  text: "Common questions about DataYoga Transform"
  items:
    - question: "How is DataYoga Transform different from traditional ETL tools?"
      answer: "DataYoga Transform focuses on simplicity and flexibility. Instead of complex workflows or proprietary interfaces, you define pipelines in simple YAML files. This means faster development, easier maintenance, and no vendor lock-in."

    - question: "Can I use DataYoga Transform alongside my existing data tools?"
      answer: "Yes! DataYoga Transform is designed to complement your existing stack. Use it for specific pipelines while keeping your current tools, or gradually migrate processes as needed."
    - question: "Can I use DataYoga Transform for AI/ML pipelines?"
      answer: "Absolutely! DataYoga Transform makes it easy to build AI-enabled data pipelines. You can transform data streams into embeddings, connect to vector databases, and power real-time AI applications - all using the same simple YAML configuration you use for traditional pipelines."
      
    - question: "Do I need to be a Python expert to use DataYoga Transform?"
      answer: "Not at all. While DataYoga is built in Python, you define pipelines using YAML configuration files. No Python coding required for standard pipelines."

    - question: "How scalable is DataYoga Transform?"
      answer: "DataYoga Transform handles everything from simple one-off pipelines to production streaming workloads. Built-in features like back-pressure handling and checkpointing ensure reliable processing at scale."

    - question: "Can I extend DataYoga Transform's functionality?"
      answer: "Yes! While the built-in blocks cover most needs, you can easily create custom blocks for specific requirements. The pluggable architecture makes extending functionality straightforward."

community:
  heading: "Join Our Community"
  text: "Build better streaming pipelines together"
  links:
    - name: "GitHub Discussion"
      url: "https://github.com/datayoga-io/datayoga/discussions"
    - name: "Documentation"
      url: "https://datayoga-io.github.io/datayoga/"

cta:
  heading: "Ready to Build Your Data & AI Pipelines?"
  description: "Start building flexible pipelines in minutes with DataYoga Transform"
  button:
      name: "Quick Start Guide"
      link: "https://datayoga-io.github.io/datayoga/"
  

stats:
  - metric: "Installation"
    value: "pip install datayoga"
  - metric: "License"
    value: "Open Source"
  - metric: "Support"
    value: "Active Community"
---