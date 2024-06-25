function Help() {
  return (
    <div className='min-h-full pb-20 h-fit bg-stone-800 py-2 px-6 text-justify leading-6 lg:leading-9'>
      <h1 className='text-2xl font-bold underline my-5'>
        Hello there, Welcome 😎
      </h1>
      <p className='text-lg'>
        ⚡ <span className='font-bold text-yellow-400'>This</span> is a windows
        based portfolio. I have tried my best to bring the windows 11 look to
        this project.
      </p>
      <p>Just put it on fullscreen and mess with your friends if you want 🤭</p>
      <p>
        If you have any feedback or any feature request, contact me using social
        links provided. 🔗
      </p>
      <p>
        And{" "}
        <span className='text-blue-400 uppercase font-bold underline'>
          <a
            href='https://github.com/Sukkoth/windows-portfolio/tree/with-router'
            target='_blank'
          >
            here
          </a>
        </span>{" "}
        is the link to the repo. Have fun with it. 😉
      </p>
      <p className='my-5 font-bold underline'>
        Here are some tips to use this app. 💡
      </p>
      <ul className='list-["🎯"] list-inside '>
        <li>
          <span className='text-yellow-400'>Right Click</span> on the home
          screen to view context menu
        </li>
        <li>The start item show you my skills and the tools that I use</li>
        <li>
          Since this is a windows based view,{" "}
          <span className='font-bold italic underline text-yellow-400'>
            use double click
          </span>{" "}
          (except for taskbar items)
        </li>
        <li>From the task bar you can choose the item of your want</li>
      </ul>
      <p className='text-lg mt-5 font-bold'>⚡ Github app</p>
      <p>This app lets you view my repositories from the github API.</p>
      <p>
        You can view them and click on it to directly be taken to the
        repositories address on github
      </p>
      <p className='text-lg mt-5 font-bold'>⚡ Weather app</p>
      <p>
        You can view your current and predictions of the weather around your
        area. This requires a{" "}
        <span className='text-yellow-400'>location permission</span>.
      </p>
      <p>
        It will default to <span className='text-yellow-400'>Addis Ababa</span>{" "}
        if permission denied.
      </p>
      <p className='text-lg mt-5 font-bold'>⚡ Todo app</p>
      <p>
        You can use simple todo list app inside this project. It has the basic
        functionality of todolist app.
      </p>
      <p>
        Data will be saved on local storage and will not be lost{" "}
        <span className='font-mono'>
          (ofcourse unless you clear it using dev tools 🙃)
        </span>
      </p>
      <p className='text-lg mt-5 font-bold'>⚡ Terminal app</p>
      <p>
        This is a simple terminal which is crafted to serve as a simple
        portfolio
      </p>
      <p>You can bring it up usin the terminal icon on the taskbar</p>
      <p>Available commands on the terminal are: </p>
      <ul className='list-inside list-disc'>
        <li>
          <strong>about</strong>: Provides information about the developer,
        </li>
        <li>
          <strong>help</strong>: Lists all available commands and their
          descriptions.,
        </li>
        <li>
          <strong>skills</strong>: Displays a list of skills.,
        </li>
        <li>
          <strong>tools</strong>: Displays a list of tools used.,
        </li>
        <li>
          <strong>links</strong>: Provides relevant links related to the
          developer,
        </li>
        <li>
          <strong>project</strong>: Displays a list of projects.,
        </li>
        <li>
          <strong>clear</strong>: Clears the terminal or console screen.,
        </li>
        <li>
          <strong>exit</strong>: Exits the application.,
        </li>
      </ul>
      <p className='text-lg mt-5 font-bold'>⚡ Explorer app</p>
      <p>
        This app has many functionalities. You can view projects I have
        done,documents, pictures, links and about me,{" "}
      </p>
      <p className='mt-5 font-bold'>✅ Projects</p>
      <p>
        This section lets you browse through projects I have done until now (if
        not all). You can double click on each of them and see see their
        details.
      </p>
      <p>Each project has</p>
      <ul className='list-["🎯"] list-inside'>
        <li>Images folder: You can view pictures of the project</li>
        <li>ReadMe file: YOu can read about the project in detail</li>
        <li>Live Demo: A link to take you to the deployed demo of the app</li>
        <li>Github Repo: A link to take you to the project repo on github</li>
      </ul>
      <p className='mt-5 font-bold'>✅ Documents</p>
      <p>
        This section brings you with files I have uploaded. CV, articles and
        Certificates.
      </p>
      <ul className='list-["🎯"] list-inside'>
        <li>
          If the file is PDF, when you double click on it, it directly gets
          downloaded
        </li>
        <li> If the file is image, you get to see inside the Pictures app</li>
      </ul>
      <p className='mt-5 font-bold'>✅ Pictures</p>
      <p>
        This section will bring you to albums of pictures. Each album is
        dedicated to specific project pictures.
      </p>
      <p>
        When you double click on each album, you get the list of the pictures in
        that specific album (folder).
      </p>
      <p>
        When you double click on the images you are taken to pictures app where
        you will be taken to the image you choose.
      </p>
      <p>You can now view all the images uploaded in the pictures app.</p>
      <p className='mt-5 font-bold'>✅ Links</p>
      <p>
        This section will give you the social links that I use and you can
        double click on them to be taken to my profile
      </p>
      <p className='mt-5 font-bold'>✅ About</p>
      <p>Isn't this a clear thing? You just get to read about me. 🤣</p>
      <p className='text-lg mt-5 font-bold'>⚡ Photos app</p>
      <p>
        This will be opened whenever you double click on image file. This comes
        with basic functionality of photos app.
      </p>
      <p>
        You get to see pictures and you are provided with two navigation
        buttons. Previous and Forward.
      </p>
      <p>
        If you want to edit the photo, just downloaded it and do it on your own
        os 🤭
      </p>
      <p className='text-lg mt-5 font-bold'>⚡ Notepad app</p>
      <p>
        Every ReadMe file is like a txt file. It gets opened in notepad app.{" "}
      </p>
      <p>
        This note pad app lets you read the files and you can interact with it
        if you want by editing the content.
      </p>
      <p>
        The only catch is that, it's not gonna be saved when you close it or use
        <span className='font-mono'> ctl+s</span> 🙃
      </p>
      <p className='text-lg mt-5 font-bold'>⚡ Help app</p>
      <p>
        Do I seriously need to explain what this does? You are here already. 🤣
      </p>

      <p className='text-lg mt-5 font-bold'>⚡ StackBlitz app</p>
      <p>
        This is antegrated environment where you can mess around with node
        porjects.
      </p>
      <p>
        You can edit your codes here. Just open the index.js, put some code in
        it, open up the terminal and run your file using <code>node index</code>
      </p>
      <p>🎯 TaskBar</p>
      <p>
        Apart from these, there is a visible taskbar at the bottom (🤭
        obviously).
      </p>
      <p>It has taskbar items list and also the status</p>
      <p>✅ The Status bar</p>
      <p>This consists of 3 parts. They are</p>
      <ul className='list-inside list-disc'>
        <li>Hidden Icon</li>
        <li>Quick Settings</li>
        <li>Notification Panel</li>
      </ul>
      <p>You can click on each them and take a look at their features.</p>
    </div>
  );
}

export default Help;
