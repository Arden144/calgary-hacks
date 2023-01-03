## Inspiration

We were inspired by the increasingly high prevalence of mental health in student bodies across the world, as the Covid-19 pandemic continues to add extra stress and confusion for already high-strung individuals. We wanted to help address these issues with a tool to bring a little structure to a student's life.

## Preliminary Design (The Ultimate Goal)

![ScreenShot](/static/L1.png)
![ScreenShot](/static/L4.png)
![ScreenShot](/static/L2.png)
![ScreenShot](/static/L3.png)

## What it does

Balancr is an all-in-one mental health app, with daily check-ins, journaling, motivational quotes, and a scheduler. It uses persistent user accounts to keep track of the mental health of each person. Depending on how the users rates their wellbeing, different activities are suggested, for instance, journaling to express their feelings when feeling low, or going for a run when they're feeling good. It also includes various helplines if they need to talk to someone.

- daily check-ins
- journaling
- motivational quotes
- a scheduler
- helplines

## How we built it

Balancr is a web app built on top of the Firebase platform. We utilized Svelte for styling the website which used SCSS and HTML5, and Bootstrap. Then for functionality, we integrated TypeScript, into the Svelte. We used Figma for the initial conceptual design of how we wanted the website to look, and what features it should have. Code was written collaboratively through GitHub, and we maintained communication through Discord.

## Challenges we ran into

Not all team members were familiar with the web development and the frameworks that were being used, so it created a barrier for productivity within the project. However, the team was quick on their feet and learned the technologies needed to implement the code. Another major challenge was using BootStrap and SCSS to format the website to look like our original conceptual designs with time constraints. We ultimately compromised the UI to focus on functionality.

## Accomplishments that we're proud of

We're proud to have created a responsive website from scratch, one with authorization capabilities and a slick user experience. We're also proud of our idea and conceptual design; our hope is that our application will be helpful to students struggling with mental health.

## What we learned

We learned how to set up and use Firebase and Firestore, as well as Bootstrap and Svelte. It was also instructive on how best to delegate tasks among a team with different skill-sets. These will all be invaluable tools for future hackathons and beyond.

## What's next for The Recruitables

There are still features we wanted to implement but ran out of time for, such as the helplines and scheduler, so an obvious next step would be to add those. We would also like to refine the user interface to more closely match our conceptual vision.

## Summary and Final Video Submission

We thought to make the video funny as well as informative! Hope you enjoy!

[![Final Video](/static/ytsc.png)](https://www.youtube.com/watch?v=abxobNxtoIU&ab_channel=TheMarshian 'Calgary Hacks Submission 2022')

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
