const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8081;
app.use(bodyParser.json());

app.use(cors());
// app.use(cors);

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const genPrompt = (
  candidateStr,
  requiredRole,
  recruiterName,
  recruiterRole,
  recruiterCompany,
  linkedInBio,
  linkedInAbout
) => {
  var str =
    '"My details\n' +
    "----------------------------------------------\n" +
    "\n" +
    candidateStr +
    "\n" +
    "The job role I am applying for\n" +
    "----------------------------------------------\n" +
    "\n" +
    requiredRole +
    "\n" +
    "Recruiter profile to whom I will be cold messaging\n" +
    "----------------------------------------------\n" +
    "Name:" +
    recruiterName +
    "\n" +
    "Role:" +
    recruiterRole +
    "\n" +
    "Company:" +
    recruiterCompany +
    "\n" +
    "LinkedIn Bio:" +
    linkedInBio +
    "\n" +
    "About:" +
    linkedInAbout +
    "\n" +
    "\n" +
    "\n" +
    "Things to keep in mind:\n" +
    "---------------------------------------------------------\n" +
    "- Focus on the candidate's past experience and skills\n" +
    "- Keep it semi-formal\n" +
    "- Include info about the company and culture\n" +
    "- Include info about the industry and why the candidate wants to work in that industry\n" +
    "- Include info about candidate competence and how they will be a good fit\n" +
    "- Personalise it for the recruiter\n" +
    "- Include info about the specifics of the role\n" +
    "- Write in first person\n" +
    "- Do not assume that there is a job posting\n" +
    "---------------------------------------------\n" +
    "\n" +
    "Below is a personalized and CONVINCING LinkedIn message to send the recruiter with a high conversion rate\n" +
    "----------------------------------------------\n" +
    "\n";
  return str;
};

const genPromptForTwitter = (candidateStr, tweet) => {
  var str =
    '"My details\n' +
    "----------------------------------------------\n" +
    "\n" +
    candidateStr +
    "\n" +
    "The Job description tweeted by the Tweeter user\n" +
    "----------------------------------------------\n" +
    tweet +
    "\n" +
    "Things to keep in mind:\n" +
    "---------------------------------------------------------\n" +
    "- Focus on the candidate's past experience and skills\n" +
    "- Keep it semi-formal\n" +
    "- Include info about the company and culture\n" +
    "- Include info about the industry and why the candidate wants to work in that industry\n" +
    "- Include info about candidate competence and how they will be a good fit\n" +
    "- Personalise it for the recruiter\n" +
    "- Include info about the specifics of the role\n" +
    "- Write in first person\n" +
    "- Dont use variables like [name], X\n" +
    "---------------------------------------------\n" +
    "\n" +
    "Below is a personalized and CONVINCING cold message to send the recruiter on Twitter with a high conversion rate\n" +
    "----------------------------------------------\n I am" +
    "\n";
  // console.log(str);
  return str;
};

// GET test
app.get("/", (req, res) => {
  res.send("ok");
});

// GET test
app.get("/test", async (req, res) => {
  const prompt = "I am a software engineer. I am looking for a ";
  const options = {
    url: "https://api.openai.com/v1/completions",
    headers: {
      Authorization:
        "Bearer ",
      "Content-Type": "application/json",
    },
    json: {
      prompt: prompt,
      model: "text-davinci-003",
    },
  };
  const response = await request.post(
    options,
    function (error, response, body) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(body);
        res.send(prompt + " -> " + body.choices[0].text);
      }
    }
  );
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Hi",
  //   temperature: 0.71,
  //   max_tokens: 882,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0.25,
  // });
  // console.log(response);
  // res.send(response);
});

// get linkedin and resume json and return message
app.post("/cold", async (req, res) => {
    console.log(req.body);

    const prompt = genPrompt(
      req.body.candidateStr,
      req.body.requiredRole,
      req.body.recruiterRole,
      req.body.recruiterName,
      req.body.recruiterCompany,
      req.body.linkedInBio,
      req.body.linkedInAbout
    );

    const options = {
      method: "POST",
      uri: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.body.openai_api}`,
      },
      body: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      json: true,
    };

    const response = await request.post(
      options,
      function (error, response, body) {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(body);
          res.send({ prompt: prompt, message: body.choices[0].message.content });
        }
      }
    );
});

// get tweet and resume json and return message
app.post("/coldTweet", async (req, res) => {
  const prompt = genPromptForTwitter(req.body.candidateStr, req.body.tweet);

  const options = {
    url: "https://api.openai.com/v1/completions",
    headers: {
      Authorization: "Bearer " + req.body.openai_api,
      "Content-Type": "application/json",
    },
    json: {
      prompt: prompt,
      model: "text-davinci-003",
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.25,
      temperature: 0.7,
    },
  };
  const response = await request.post(
    options,
    function (error, response, body) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(body);
        res.send({ prompt: prompt, message: body.choices[0].text });
      }
    }
  );
  // res.send("ok");
});

// get resume text and return latext resume
app.post("/hot", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(PORT, () =>
  console.log("Listening on port: http://localhost:" + PORT)
);
