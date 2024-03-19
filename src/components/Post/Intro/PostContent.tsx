import { FC } from 'react'
import Image from 'next/image'
import PostHeader from '@/components/Post/Intro/PostHeader'
import PostRelated from '@/components/Post/Intro/PostRelated'
import Article from '@/components/UI/Article/Article'
import styles from '@/components/Post/Intro/Intro.module.scss'
import blogArticle1 from '@/assets/images/blog-article-1.jpg'
import blogArticle2 from '@/assets/images/blog-article-2.jpg'

const PostContent: FC = () => {
  return (
    <div className={styles.content}>
      <PostHeader isMobile={false} />
      <Article>
        <p>
          Project budget management is the process of planning, allocating, tracking, and controlling project resources throughout a project’s lifecycle.
        </p>
        <p>
          But creating a project budget that works for you and your client is an art form. It’s the profitability of each project that will decide if your business sinks or swims. 💰
        </p>
        <p>
          So in this post, you’ll learn how to create and manage a winning project budget like a pro.
        </p>
        <h3 id='title-1'>What is a project budget?</h3>
        <p>
          A project budget is the total cost of all the tasks, activities, and materials associated with a client project.
        </p>
        <p>
          A well-defined project budget helps you track the estimated costs versus the actual cost. And you can use it to track project expenses and reduce the likelihood of running out of resources or going over budget.
        </p>
        <figure>
          <Image
            src={blogArticle1}
            alt=''
            width={1175}
            height={335}
          />
          <figcaption>A poorly defined project budget in Toggl Track</figcaption>
        </figure>
        <h3 id='title-2'>Techniques for estimating a project budget</h3>
        <p>
          Before you go ahead and rush into creating a project budget, it’s wise to get familiar with the different budget estimation techniques.
        </p>
        <p>
          There are a wealth of proven project estimation techniques, but here are the ones we think will be most helpful to you:
        </p>
        <ul>
          <li>Expert judgment</li>
          <li>Analogous estimation</li>
          <li>Top-down estimation</li>
          <li>Bottom-up estimation</li>
        </ul>
        <h3 id='title-3'>Expert judgment</h3>
        <p>
          This one is pretty self-explanatory.
        </p>
        <p>
          Start with your team and add use SMEs if you have knowledge gaps. Expert judgment is helpful when you don’t have historical data, or the project is simple enough.
        </p>
        <p>
          But the biggest downside to this approach is the subjectivity—one person’s estimate could be wildly different from yours, for example.
        </p>
        <p>
          This is where historical data can be useful…
        </p>
        <h3 id='title-4'>Analogous estimation</h3>
        <p>
          Analogous estimating is a pretty easy way to determine how much something might cost.
        </p>
        <p>
          You look at similar projects you’ve done and use them to create a ballpark estimate for the project.
        </p>
        <p>
          But be careful; this is only a reliable method for estimating a project budget if you can access past project data and the project isn’t overly complicated.
        </p>
        <p>
          Using Toggl Track, you can view past project data using the Report Dashboard.
        </p>
        <p>
          You can access data at project and task-level such as:
        </p>
        <ul>
          <li>Total tracked hours</li>
          <li>Total billable hours</li>
          <li>Total cost in labor</li>
        </ul>
        <p>
          You can use this to put together quick estimates of costs and time.
        </p>
        <figure>
          <Image
            src={blogArticle2}
            alt=''
            width={1175}
            height={335}
          />
          <figcaption>Total hours tracked on projects in Toggl Track</figcaption>
        </figure>
        <h3 id='title-5'>Spreadsheets</h3>
        <p>
          Using a spreadsheet to create a project budget is a practical way to organize and track your project’s expenses.
        </p>
        <p>
          Spreadsheets are great for creating and managing project budgets as they are versatile, efficient, and user-friendly.
        </p>
        <p>
          Our <a href="#">WBS template</a> incorporates project costs, so feel free to use that as your template.
        </p>
        <p>
          Once the project has started, you can use our free project budget template to track expenses. The template focuses on tracking hours for specific tasks within a project and includes columns such as:
        </p>
        <ul>
          <li>Estimates hours</li>
          <li>Estimates cost</li>
          <li>Actual hours</li>
          <li>Actual cost</li>
          <li>Over / under (budget)</li>
        </ul>
        <p>
          I’d recommend you check out the ‘Free Project Budget Template‘ guide to learn how it works best.
        </p>
      </Article>
      <PostRelated />
    </div>
  )
}

export default PostContent