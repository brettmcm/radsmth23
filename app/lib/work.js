export async function getPostIdList() {
  return [{
    params: {
      id: 'canary'
    }
  }, {
    params: {
      id: 'islanddwell'
    }
  }, {
    params: {
      id: 'apeak'
    }
  }]
}

export async function getPostDetails(postId) {

  const dataSet = {
    'canary': {
      title: "Canary Co.",
      category: "Consumer goods",
      credit: "Branding and visual identity",
      location: "Oceanside, CA",
      year: "2023",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products.",
      images:
        [
            {
                img: "/work/canary/canary-01.png",
                caption: "Canary 1"
            },
            {
                img: "/work/canary/canary-02.png",
                caption: "Canary 2"
            }
        ]
    },
    'islanddwell': {
      title: "Island Dwell",
      category: "Home staging services",
      credit: "Branding and visual identity",
      location: "Maui, HI",
      year: "2021",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products."
    },
    'apeak': {
      title: "Apeak Invest",
      category: "Real estate development",
      credit: "Visual identity",
      location: "Maui, HI",
      year: "2021",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products."
    },
  }

  return dataSet[postId]
    // return (
    //     <div>{dataSet[postId]}</div>
    // )

}