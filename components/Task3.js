import React from "react";
import Link from "next/link";
import Form from "./Form";

const Task3 = ({user}) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-4 pt-16">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="pb-10">
            <Link href="/main">
              <img
                className="w-8 cursor-pointer"
                src="/images/back_arrow_icon.svg"
                alt=""
              />
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              {" "}
              Planting Instructions
            </h1>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              1. Choose a Suitable Location
            </h2>
            <p className="mb-4 text-gray-700">
              Select a spot with adequate sunlight and well-draining soil for
              planting. Ensure the chosen area provides the right conditions for
              the specific plant you are growing.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              2. Prepare the Soil
            </h2>
            <p className="mb-4 text-gray-700">
              Loosen the soil and add compost to improve its fertility. Rake the
              soil to create a smooth surface for planting.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              3. Plant the Seeds or Seedlings
            </h2>
            <p className="mb-4 text-gray-700">
              Plant seeds or seedlings at the recommended depth and spacing.
              Water gently after planting to settle the soil.
            </p>
            <div className="flex justify-center">
              <img
                className="w-64 h-60 rounded-lg shadow-md"
                src="https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/starting-seeds-right-in-your-garden/starting_seeds_right_in_your_garden_header.jpg"
                alt="Planting example"
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              4. Water and Care
            </h2>
            <p className="mb-4 text-gray-700">
              Keep the soil consistently moist but not waterlogged. Provide
              proper care by watering, fertilizing, and protecting from pests as
              needed.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              5. Witness Growth
            </h2>
            <p className="mb-4 text-gray-700">
              As time goes by, you'll witness the growth of your plant. Here are
              some stages of growth to look out for:
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-28">
                <img
                  className="rounded-lg shadow-md h-full"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgaGhgYGBgYGBgYGBgYGhgZGRgYGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOkA2QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADgQAAICAQMDAgQEBQIGAwAAAAECABEDBBIhBTFBUWEGEyIyFHGBkUJSodHwscEHFXKi4fEXI2L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAQACAwACAwEBAAAAAAAAARECIQMSMQRRQWFxExT/2gAMAwEAAhEDEQA/AAKijxTo5mqNUlGhTRqjxQI1FUeKA1Rqko0BoqjxQI1FUlUUCMePUUBqiqPFCI1FUlUUKjUUeKA1RR4oDR48UBoo8eETiiigKNFFCmiiigKNHjQFGjxoQooooU8UUUBR4ooDRR4oDRRRQGijxoCiijwGjxRQFFFFCJxRRoCjRRQpRoooCjRXFAUUaKA8UaPAeKMI8BR40eAooooQ0UeKFNFFFCFFFFAUUUUB4oooD7ooN82Wo0ns16rajFZZjEmyxpgfbFtlhiqVMV7ZHbLiIxECqoqllRVArqPUnGZpNMQjiQLR1aNXFlRbZJTJgRqYrqRqXGRjTFdRVLQsltlFFRQkY4/y4AsaEtjkDjgUx5PZEUgQikikbZCMEajmGYtRMQPJrmnDXfI6ZMstOaYKauWLqpZyTGw2SJXmR+Kli6qa9k9WqXjB7j9Bz42cK5FH17Tt8/wzhyJuTg13XtM+/eHq4oSLyfUdK+Byjj8j4IgjZ5fZfVZvleTJBn1MHyZ7k09RDZolywP5kuxtGnq0UeXfMgKPE+eanJLxGtkjDJMx9VILq49j1bSNLlmXh1MMTMJZyZvEYslB0yyRyCXUxY0rMqfMJD50aYIjASlHuFqwqPYxXsi2SzdHuNMcHsMdVhq4xJtp5xdsZ7CSQwhsERSpYliIJjl6jgwfITAkcxnW/BnxNkTIuNySrGhc4oIZ2v8Aw++HXz5lyEUmM3fqw7ASWaWu++LukjLpy9fUBuBnkr5Knu3XiF07/wDSf9J4FqMZs/nLhxpma4lkVQyaAzLaxVEsVZHEnMN2V4gU1UocmFXKHSXUwHlgoY3D3SDPjqXUxbhyEQ/DlmWj1CseSNXGouSMc0EGWVvml1LBGTPIDUQN8lyCsY0auPNDVyzIwAwxXIjUwcuSP82Z7Zz4kfmNGnqBwmHIvHaUabBNFU4mG4ByJB3SaL45Q2P2llLAJxyPyZrYNA78KJ1PRvgV3AZ22j0Hf95PafGb04XBpdzBa7kAfqanvXw901dPgTGoqgL9z5MzdB8HafHTbbYc2eeROiVgOPSWcpvbN7c18d6oJgK3y3AnlGTEPSe3dV6amdacX6Tyn4g6d8jIU8dwZn27a4/HO5EiRJeyRgtTTS7EgEvqVqwkw8grbFzK2SWu5Mod4VS6ypkj5MwkPmgzTKPypYMMdGhCmRQjoRB3uH51g4W5UDqphGDHLEw8wzFjAjTEsaUJZUcCV5DIuKckhvMi5kblZFgkS5cwkDVcmCu1HiYjdHObh/Sumtlbjt5MysT334nYdE1SonHec/Nz9eOo3tB0vHiFmrmxpepp9oInEa7qjvapd/6TNVs2P6i/Anj48vJb7RfWX69Py9QEEHUBfecdoOsNlHHNRdTyZQhKDmc/+vkvL41eEkegYNSGHecl/wAQNErYvmD7l5/vM/pPVsoADjmP8W6p3wEE1Ynr4eT2c7xx5/iz3JNkqA6fEQauaC4CPeesSXJYk8bXHTF7RvlGFXOOOJnaq5p4B6x82nBEh9crkLSON2m9k0Q8wTJpR6S6nrQX4mol6jXmW5NJ7QDN08yxLaKbqVy3DqgZk/g2hui0pBixJa39NyIXsg+iFDmFZHHiYdc6DOSIJkyGHMCYLlx+00zVG64qhKacR/le0upiRQtKcmGpbptV68XJ6rv3u/SZVnarMVTfNHpHWwMfPeZXUsylQleZmLkK8ATPPj7RmdV0jfE7LYVefWZ+q61mewTVzHLtf2xNkceJj1s6a9nbfCuv2LRnQ5Oqgjkzy7Ta50PYwpupZG4UGcr4+S7HdHqyKbJEyOtdb+aNoPAnPY0djTsQT2EfBpBuqzXmdOHj9fqWljDWSJoYs5A+r95Zi05vYiM//Spavc0Jqr8Pah8ZAxML8uVQf95E7W4Y6DpHwa+bGuQ5kUOoZVCl+DyLIIF/lcv1PwTqFFoyP+R2t+zcf1mF8MdN1ukY7c4e7rAjF0vvZZqVT3+3ufM9L0Gqd8aMVI3DlSCCpuqIPYzl/wBpuXsy5ryvq+lfTmnXiyAw5UkcGj6+xmemsB4nr+fSI4ZXQMrdwwsfsZ578WfBhw3m04JTu6dyn/6X1X28fl2zw8styruMUvu7SOTTnvBNJqaPM0y6kd52zDdCKg8xhgVjVS118S3Ald5QDm0QEGqpq6q64mfsF8jmalYsUPqiogo6jZ7w/U6TcOJnYehszd4No7B1EdiYWdUtczA1/TmxnuYJl1DAVcki211Sa5e0s/FrOJw6h77w38Q3vNYz7N9MaBQXO0+8S50BPf288Q3UaXCxbH81C5Xcm48n3HryD+0H/wCX2CrZAGC8lRcz9azA+oVPJq/MDXpjO21D4u5LqGKlQM+5PJ834uEabqKWCmwtt5BaiPACiP8AD79XdP6QykK1Entcs1PTqatosd//ABKc/UwroucoEPIdAS4P8vHYwbU9fVXrGpHeg5JPsSf7R3TqfWsvS6Xcy0LrnxfrKjpRif6iouiLNDmZuo1uTKWcF3CEMVSwtkcbt33dvSZ2TrebIQAvIPCqt8D+YnmTLV2R1WfEGNoVPB5Hn2BgOl0bZaAtTuo+vfk1Acup1Rx7hgtQQQ6AbgPNhD/tDeg9TL5iAGVlR+G4+sVV32Pf95OWzjbDZa9R6X0lUQKv0gjkDlj7k+sJfTInJQt796/Mm5zfSevu2MFuPfz3I59+IT/zqjYafM8nk/i3te97dPpdSgUELR/KoXg1/wBXficPk6xfn9f7wN+vuMiItAEEkt2NeAO9/rM8PJy3o9Xqq6lDQsWb4/Lg/wCsC17KvPic10rq5ZQXrcOAQKFH2JJuEdV6huxOB3o1+c9fPn7cf7Y9crzz4h6UmLUOF4RvrUegPdR7A3+lQbDSkX2mz1Z0yuodq2qba+R/Lx5FgzJfp5IALjuLrtXPF+89Hhu8JavxuaQY2S+DKURNx7VAXwIhG2wCO3v5lq40JIBqu83O2r0h1AIO3Ex9Q5HIM0dUo/m/eC48HzDtUizGJaHTVHbcN6X1RATdfrLdd8OZMSb7BXzXeZOPSIwv/BLe5lSf0K6rmXK30iZz9Jvmpq6bCAOJoqg288ROlvbmE6Wo5qW/hl9BNxdNuuUf8ul1nHNZusKEVvlEvuOx2NhANp+kd/X8veX6nrWRlJT7SygtRqq+wEgee86ZelquJCz48iMPsKi0quLMoyacdkCqCRSqoI/Qe8nxfrjc3VQxrb9XP8XBPvHxOqrv2qrWewLNXYsJ1Wp6KXJG8pdWoC7TQI5Fc8esBf4XRQAXcgduQB37du0sxmyqemZUDI2Yr9n2gEkIR9ze9H+oj6oaJ8nzka2ZjWMkgGhQIJHHIumh+i0ePDuIRCxraz/UVo2a/pKh03AxB+Wi/Xd8dz5IPBHovbiZ3vGs60VptqozFBuK7lRwv3V9O/2HevylebpZKo5fkqfmMKRn44C/56TN1eq+UyguW2ljuJ+o2eL/ACFCvaHK+1N+98ha6DMNi9h271x/SP8AV+/BmK8RGTGoChQNrN/EfpJoDk0Ae/mQ6g5bFuD8jl+wIrsBXczJ1GsZEa3RgTwFvjvZmJp9cfqVR9TDux5969zNT9s2ydN/T9WVl2jeDwQGvaSPPB44MKbqU43R6kqxu/qsH/zDM25aoFhXBH+88/m8PtYs5OiHUQPPqeT6m/P6wHWdSU09bihsfmf9pk9TxFAE5Z/ueuQhPIX8x5g2h0j5L2sAB33H/QdzJw/F4zu0vO/HU9J63kDAiiGJ7nhBdkkA9+QJu634iVUNtXFcd79pwzafZ9LMoJI5G4Cu/aqBqz+0N0mgQuP/ALt3k391UeVrwePImr4ONv6izlXTdDxpqg/zsgxrQ2te0vzyLPNUOfS5LJg07OyYshG9wEs7yAPp3rXCgc9/SYOuR0dN+TfwdwDfRsHgjup7c3zUn07XISRhAsfwO1dxW5GvnyTfqZ1nGceomtvHqkclVvdj+ncauhYocckn+L2gq58xIBxt9It2pTf3C6QduQf9hBtfjffvRkQtSuva2rknyDXofeGJnZyiBWVkHLqnJF8Ase/5/pKukXVyVZCjBQSC1seOeAa2nmq9o2DF8vc+7aoI2E3fPqIPlCWCTW295IFMOCW47kzM1XVt5PzHLUeETgBeyi/PEJ8dL1HrbuhQupocn7a9PzmBo9Jk5N8et95DpmFyByCLI5+8elg9xCdL85+HYIqCiAtkkk0f2qLaskwZpsjDirh2p1YQhSOfSZRylMgVty2qtTqFY32qrBHkGXq6NkcueV7NRqqv8pL2s6Xtriv8JqL8b/lSOHVrlBUVY9qjfgv8uVly2p+JMmRh2RfQcw3pXU3U2zWPBML1XRcRPHHpEnRAeCeJerGZsqeXrD92+oeogD9aO7liB7w5uhFVJVjXpMXXaIMNw7jxC9lqOt7jQF15lWo1r1vs0Kr0gOr0xUB1FKf3B/WDjKxG2+JcZ9r8Tz5Wdtx8zp8WmI07M6GyDQU1Q/mPrOc0tBwG5FjtNPUa/IX2Je3ilPp/aKRFHG0hlBAFknuw9BJ5dThy7V2lAON/difAPtDn6PiULvzMbs0lUGPgSrF0xEP1Nu4FAeT6mNXKDPS/rVka1NEuaXaR91iHrmRbVH3sSAzn7FHv6zL1KhnZAWr+Ig2L8TQ0/Rwqbg5BKncpNX6RgOx40LWadgbZx9td9x3evMyNXo/vyK1nmgh3Xffcasdzz7zodD0dNocMGXgAEfWeOTfapd1Dp2Dc14+XAX7qHHdh6H3mbWpx6cp03NkY2BYSyVBCFd3dh7ceJWjNkysQCgN8i6oebmjr+k48NFWdXPI54C3R3eTcgnVXTkBSBYO4fxS7+mc/bL1+B0amsr4bnkf4ZoaLS7sTJ9jq3DGtrKfB88esNPWA67nRbXkEjj8pi6vqRd9xA5rgGhX95fp1Beq1jLs3uXZD38cdq9Zp4usO/wBGHI+5yOybiL79hOdTF851VF2lmCqLue3fCPwzi02NeAWPLMe5M5eTyTh1/JL/AC5fQ/A+pzgfMylcY5Cv3NeSB/eaf/xtpwxZiTfNL9IB/Sd6cyL3NyDa9PE8nL8mT5cPrkMXwOiilyOOb55r8rlWo+C3T6g+8XfNBgPYj/P3nYfjll7atWFTlx/Jtv07jxzrudMSHTojNnZ1tzZoX4Y9vShxJ4icaqmQpvNH6GIG2jd2P6cze/4h9NUKNSi/Uhs12I9x5nDabWDOwbIfqQluDW4VQX0nv8PKc+OtW61vocs+1gexPK7q8ftKvmr/ACf90A1GqcA88Hnyf6wL5jTria2myFjfYeJJM7WJLFnTbZ5kG1SDkSVY0xqvpowF8KEMRxKcWvD37TMfK3zK3UPMYazOpJQoMSL7dx+kzqPAnb5+m4dnFbj73MHJ0+jX7SzkzYATRtQN1DlyOq0Vvm94+4Q7HkCAKRZlmq07slDgHvJqzinpNmRNij6vJJhGP5I3I5ogcN5uC6fGmNQBy3rJnSK7B2I9x7S4mgTp0Vw6sRR5oXcPfEb30WUjn/1NHS4cS+hB55leodEP0sdp8eI1cU6LqucjZSbFH0nsZka3qOZGG9gfQd6E0xo9xteBAeo9FY8g/pckwupHVvnraV3UASfbzHzaR2xsi7Cw9O7e8WPpwVF4I9Zs40xIoZK3V+spjiFxv9gBJ7ba5hetDhVR8ZQoK7V355m1puo7HY7FvuCRzJ634i3gp8sMzcHjx6xt1PWftR8D6ZPxCsea5F/6z1Z+p0KueUaHImB1bfbMORXA9BN5+q2O8+b+Xx53ls+LI6vN1T3gr9W95yWTqPvBcnUTPJPByrcdoer+8vw9Y95wSat27AmHgOBc1/5eX1p22u1yZMLo1EFTPJ2wIjGkLcVXbn1nTYmdlotQ8wfV4UBXiyPPrPo/jcOXHjdc7GUNG7pZ+lR9og34Z/8ALnSfilZaIqUfLSenTGV80EVBcinx2luHSG+YVmwUsus4q6YvB9YHnxuXNesN0mIiGJjA78y6SAMGNxXM2MGgsbj3gmRgDNvQ5AVHMxa3mM3Joa+qu0ryavxQqa2vyALxMDZvNSxGhidCvYSjKoolO80dDoVVeebler06qbUQuudyY8o8n8oM+sb7WnThL4NQDU9LBN1Kzn6NoNdQqHfiQZk5sGwcd4NpncmSdr8afUdUQKuZuHVMT34hGfTsRGx6WhzKzdGIi1Z71Ipph9wq6qPjcVzxUcaoDt2hUU6cOC3J9fSEPpCB9PMHOu5hmDXAiZ5TY1MZGXG19oQNMSLhuode8HXqCHgGZ48ZIX6v02pRO5Aj5OsI3AmXq8YccfvBsGkC8zXrp7Y031bE0sL0ycWf1mMupCmHpq7FAzUnTO9m1+qA4H6TP/EvNAYAxsy/8IkagvJptp7Sp8HHaa2o7wfL2mY2yXUAQN9QR5hutmPlmmTZtUSYbodce1zHeEaLvJRs58xI7wXCx3RN2jYe8Dd0+rFUTGy6gMfaZqwnH2lBCv6SQezB0luGZrUSfAp8SlNOgPaFCUHvJxWrPlAyrJp+OIQsRm2WPl055grYSBNvLAsvaTTGFrMpHaR0uoa/aT10hglRpPkJEys+MqbmgnYSvU9jBQia0jiEDVkihMtu8IxwgnGlmzDFAEF08JMC1M5ln4wype0hBX//2Q=="
                  alt="Plant growth stage 2"
                />
                <img
                  className="rounded-lg shadow-md h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdo4UZqsdJaf0vVa181xYvj0wIrJ7ZXagHsg&usqp=CAU"
                  alt="Plant growth stage 2"
                />
                <img
                  className="rounded-lg shadow-md h-full"
                  src="https://media.istockphoto.com/id/1290166220/photo/a-sequence-of-seedlings-growing-progressively-taller-into-the-dirt-with-unfocused-background.jpg?s=612x612&w=0&k=20&c=kcOs_OrqjhxGXMwauhVoc7PpZzPt6VmjGm9pBA6BFk0="
                  alt="Plant growth stage 3"
                />
              </div>
            </div>
          </div>

          {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

          <h1 className="text-black text-center font-bold text-3xl mt-10">
            TASK SUBMISSION
          </h1>
          <div className=" ">
            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

            <div className="flex justify-center mt-8">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">
                    Upload Image(jpg,png,svg,jpeg)
                  </label>
                  <div className="flex items-center bg-black-100 rounded-lg  justify-center w-full">
                  <Form user={user} task={"growing"} status={"inprogess"} index={2}  time={Date.now()}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;
