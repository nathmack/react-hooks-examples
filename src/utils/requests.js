import React from 'react'

export const fakeFtech = (state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      state
        ? resolve(
            <span>
              My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand? <br /><br />
              Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
            </span>
          )
        : reject('failed to fetch article 😞')
    , 1500)
  })
}
