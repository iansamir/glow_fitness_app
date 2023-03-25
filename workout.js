let prompt = document.querySelector('#prompt'),
  workout_div = document.querySelector('#workout-div'),
  exercise_els = workout_div.querySelectorAll('.workout'),
  exercise_search_div = document.querySelector('#exercise-search-div'),
  search_result_div = exercise_search_div.querySelector('#search-results'),
  search_bar = exercise_search_div.querySelector('input');

let searchShowing = false;

const hideSearch = () => {
  exercise_search_div.style.display = "none";
  workout_div.style.opacity = "1.0";
  searchShowing = false;
}

const showSearch = (e) => {
  e.stopPropagation();
  exercise_search_div.style.display = "flex";
  workout_div.style.opacity = "0.1";
  searchShowing = true;
  search_bar.focus();

  // If you click off of the exercise search, it disappears
  window.addEventListener('click', (e) => {
    const isClickInside = exercise_search_div.contains(e.target);
    if (!isClickInside && searchShowing) {
      hideSearch()
    }
  })  

}

let selected_el;
exercise_els.forEach(exercise_el => {
  exercise_el.addEventListener('click', showSearch)
  exercise_el.addEventListener('click', () => {
    selected_el = exercise_el
    console.log(selected_el);
  })
})

const exerciseData = [
  {
    "name": "Overhead Press",
    "img": "overhead_press.png"
  },
  {
    "name": "Medicine Ball Squats",
    "img": "medicine_ball.png"
  },
  {
    "name": "Sideways Stretch",
    "img": "sideways_stretch.png"
  },
  {
    "name": "Reverse Stretch",
    "img": "reverse_stretch.png"
  },
  {
    "name": "Biking",
    "img": "biking.png"
  },
  {
    "name": "Lunges",
    "img": "lunges.png"
  },
  {
    "name": "Jogging",
    "img": "jogging.png"
  },
  {
    "name": "Dumbell Curls",
    "img": "dumbell_curl.png"
  },
  {
    "name": "Overhead Stretch",
    "img": "overhead_stretch.png"
  },
  {
    "name": "Sitting Squat",
    "img": "sitting_squat.png"
  },
  {
    "name": "Upside Down Stretch",
    "img": "upside_down_stretch.png"
  },
  {
    "name": "Power Clean",
    "img": "power_clean.png"
  },
  {
    "name": "Swimming",
    "img": "swimming.png"
  },
  {
    "name": "Basketball",
    "img": "basketball.png"
  },
  {
    "name": "Boxing",
    "img": "boxing.png"
  },
  {
    "name": "Tennis",
    "img": "tennis.png"
  },
  {
    "name": "Barbell Row",
    "img": "barbell_row.png"
  },
  {
    "name": "Bench Press",
    "img": "bench_press.png"
  },

]

const showexercises = (exerciseArr) => {
  search_result_div.innerHTML = ""
  exerciseArr.forEach(exerciseObj => {
    let exercise_el = document.createElement('div')
    let exercise_img = document.createElement('img')
    let exercise_info = document.createElement('p')
    
    exercise_el.className = "workout"
    exercise_img.className = "workout-image"
    exercise_info.className = "workout-text"
    
    exercise_info.innerHTML = `${exerciseObj.name}`
    exercise_img.src = `/workout_images/${exerciseObj.img}`
    
    exercise_el.addEventListener('click', () => {
      selected_el.innerHTML = exercise_el.innerHTML;
      hideSearch();
    })
    
    exercise_el.append(exercise_img)
    exercise_el.append(exercise_info)
    search_result_div.append(exercise_el)
  })
}

search_bar.addEventListener('keyup', (e) => {
  let query = search_bar.value.toLowerCase().trim()
  let filteredexerciseArray = exerciseData.filter(exerciseObj => exerciseObj.name.toLowerCase().includes(query))
  showexercises(filteredexerciseArray.slice(0, 4))
})
