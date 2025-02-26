# Success with AI

The purpose of this page is to describe how the chuck-stack uses AI to help small and medium organization improve operational excellence.

While generative AI (specifically [aichat](./tool-aichat.md)) was the catalyst to create the chuck-stack, AI (in all its forms) is what drives conversational enterprise computing! We now have the ability to put more tools with less effort in the hand of the people who actually perform an organization's work.

## TOC

- [Self-Help](#self-help)
- [AI in the chuck-stack](#ai-in-the-chuck-stack)
  - [AI Data Insights](#ai-data-insights)
  - [AI Real-Time Augmentation](#ai-real-time-augmentation)
  - [AI Automation](#ai-automation)
- [AI Principles](#ai-principles)
- [AI as a System](#ai-as-a-system)

## Self-Help

IT departments have historically served to create tools for organizations. Little more...

> The chuck-stack is singularly focused on creating a platform of self-help tools.
>
> Said another way, the chuck-stack changes how technical users serve an organization by moving away from tool creation and moving toward self-help augmentation and automation.

## AI in the chuck-stack

The chuck-stack uses AI to help organizations is three high-level ways:

- Data insights - using traditional BI and AI analytics to drive insights and strategy (mission, vision, values, principles)
- Real-time augmentation - helping users receive the right information, make the right decisions, execute the right actions, and eliminating mistakes
- Role automation - helping users automate and monitor their role's tasks without the direct involvement of IT (classical tool generation)

We believe that generative AI makes technology more accessible to more people. Said another way, we believe we can put more technical reasoning tools in the hands of the 'everyday' worker and help them think more critically and better execute their roles.

### AI Data Insights

Traditional/classical AI analytics methodologies continue to drive an organization's success. The datasets are getting bigger, and the analysis tools are getting better.

If you get the data in the proper format and tool, users can self-help. Here is an example of how a traditional IT resource can create a self-help platform.

- IT extracts, transforms and loads the data into an appropriate columnar storage and processing tool (Spark, Snowflake, Redshift, BigQuery)
- These tools provide AI assisted analytics.
- Work instructions describe the data.
- Users can query the data to derive insights.
- Users can critically validate the insights by using well-known and documented data analytics practices.

It may seems strange to think that normal users can accomplish the above; however, let's put this concept into practice. Let's assume that we have a well documented data lake loaded into a proper AI assisted BI and analytics tool.

Here is the example:

- User asks: "Is our user subscription rate declining?"
- System responds: "Yes, user subscription revenue is down by more than 3% as identified by year-over-year revenue rates."
- User asks: "Is this trend more about retention or new subscriptions?"
- System responds: "Retention seems to be the biggest culprit. New subscription rates are stable within 1% of historical normal values."
- User asks: "How do we validate these insights?"
- System responds: "You organization has 15 documented ways revenue is profiled. Shall we start by comparing these profiles?"
- User responds: "yes"
- System responds: "Our initial hypothesis seems to hold true that declining retention by subscribers with more than 24 months is the greatest source of declining revenue."
- User asks: "What indicators do we have that can explain this decline?"
- System responds: "Your documentation suggests the following three attributes relate to subscription rates: When was the last support ticket, Was the perceived resolution positive, frequency of logins."
- User asks: "How do the prove these concepts are related?"
- System responds: "causality, correlation and other metrics can be evaluated using the following tools: Chi test, heat maps, violin graphs, ...
- User responds: "Make a recommendation and let's start..."

We realize this example is long; however, if you do not go into detail, it is hard to understand the viability of the statement. 

AI knows a vast amount about data analytics. User's work instructions connect your transactional activities to these data analytics practices.

If users write work instructions and IT loads the data in the right system, users can derive powerful insights! Let's use these insights in real-time decisions making practices to drive desired behaviors.

### AI Real-Time Augmentation

Our business partners interact with our people and systems in both real-time and asynchronous ways. We want to influence positive behaviors at the moment a user or system responds/acts.

Responses should be driven by work instructions. The question is: is there an insight from above that might alter how we respond in the work instruction [happy path](./terminology.md#happy-path)?

Another question is: how would an AI have the opportunity to respond? A picture of solution is [presented here](./blog-llm-ai-operations-automation.md). Our goal is to provide a real-time assistant that is context aware. Here is what this looks like:

Any time we engage an AI LLM, we want to make the following present and actionable:

- Working memory (CLI and shell session engagement) - said another what, this is the current conversation thread
- Context - what window do we have open, what record are we viewing, ...
- Episodic/augmented Memory - attribute tags/associations with this context (observations, actions, preferences, ...)
- Semantic memory - work instruction retrieval
- Procedural memory - tools, scripts and workflow given the context

The goal is for the AI LLM to identify next steps based on work instructions AND insights.

References:

- [Blog - Operations and AI LLM Technology in 2025](https://www.chuck-stack.org/ls/blog-llm-ai-operations-automation.html)
- [A Survey on the Memory Mechanism of Large Language Model based Agents](https://arxiv.org/abs/2404.13501)
- [Practical Implementation of Memory Mechanisms](https://www.youtube.com/watch?v=VKPngyO0iKg)

### AI Automation

AI automation is an easy concept to reason about once we have established our work instruction and our insight is such a way where we can provide real-time augmentation.

[In this demonstration](./blog-llm-ai-operations-automation.md), we show how check lists can easily be represented in work instructions. We demonstrate how a task can be associated with an AI tool. [In this demonstration](./picture-success.md#how-is-this-possible), we show how AI LLMs are capable of multi-step reasoning.

The next logical step is simply to get the system to perform a workflow for you. It knows the context, tools, and instructions:

- User Asks: "check in Anita"
- System Responds: "process completed successfully - Anita is checked it"

Because work instructions can also document short codes, a [superclerk](./terminology.md#superclerk) would simply type the following to eliminate wasted time and effort:

- User Asks: "ci anita"
- System Responds: "process completed successfully - Anita is checked it"

## AI Principles

Here are the AI principles that drive our decisions:

- Simplify the AI tool sets to the extent possible
- Bring the model and code to the data
- Make the models and code useful to those who actually perform the work

## AI as a System

[This video](https://www.youtube.com/watch?v=vRTcE19M-KE) does a great job of characterizing our approach to AI systems deployment. Any one model by itself does not help an organization. Instead, the chuck-stack's use of work instructions, database conventions, tool deployment, multi-model prompting, and best practices drive success with the chuck-stack.
