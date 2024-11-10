import React, { useState } from "react";
import "../index.css";

function About() {
  const [visibleParagraphs, setVisibleParagraphs] = useState({});

  const handleToggle = (id) => {
    // setVisibleParagraphId(visibleParagraphId === id ? null : id);
      setVisibleParagraphs(prevState => ({
        ...prevState,
        [id]: !prevState[id]
      }));
  };

  const cardData = [
    {
      id: 1,
      imageSrc: "./images/Rajapalayam_480x480 (1).webp",
      title: "Rajapalayam",
      description: "Devoted, Affectionate, Fearless",
      fullDescription: `Rajapalayam is a majestic Indian breed that is known for its
        striking white coat and a tall, lean build. This breed originates from the town
        of Rajapalayam in Tamil Nadu, India, and was historically used for hunting wild
        boars and guarding properties. Interestingly, Rajapalayams have a unique trait
        where their nose turns pink when they are healthy and well-fed. They are also
        known for their loyalty and protective nature, making them excellent guard
        dogs. However, they can be wary of strangers and may require early socialization
        and training to prevent aggression toward unfamiliar people or animals. Despite
        their independent streak, Rajapalayams can be affectionate and loving towards
        their families, making them great pets for those who appreciate a strong and
        intelligent breed.`,
    },
    {
      id: 2,
      imageSrc: "./images/Kombai_480x480.webp",
      title: "Kombai",
      description: "Loyal, Courageous, Independent",
      fullDescription: `Kombai, also known as Indian Bore Hound or Combai, is a sturdy and
        muscular breed that hails from the town of Kombai in Tamil Nadu, India. These
        dogs are known for their striking resemblance to the Indian Wolf, with their
        short, dense coat that comes in shades of red and tan. Kombais are highly
        intelligent, fiercely loyal, and extremely courageous dogs that were originally
        bred for hunting wild boars and other large game. They have a strong prey drive,
        which makes them ideal for hunting, but can be challenging to train and
        socialize. Kombais are protective of their family and territory and can be
        reserved towards strangers. They are highly energetic and require a lot of
        physical exercises and mental stimulation to stay healthy and happy.`,
    },
    {
      id: 3,
      imageSrc: "./images/Mudhol_hound_480x480 (1).webp",
      title: "Mudhol Hound",
      description: "Reserved, Loyal, Energetic",
      fullDescription: `The Mudhol Hound, also known as Caravan Hound, is an ancient breed
        that originated in the town of Mudhol in Karnataka, India. This breed is known
        for its lean and muscular build, with a short, glossy coat that comes in shades
        of fawn, black, and cream. Mudhol Hounds are famous for their remarkable speed
        and agility, making them excellent hunters of small game such as hare and fox.
        Interestingly, Mudhol Hounds have a unique trait where their tails are long and
        curved like a sickle, adding to their distinct appearance.`,
    },
    {
      id: 4,
      imageSrc: "./images/Rampurgreyhound_480x480.jpg",
      title: "Rampur Greyhound",
      description: "Athletic, Intelligent, Loyal",
      fullDescription: `The Rampur Greyhound is a breed of sighthound that
                    originated in the Rampur region of India. This breed is
                    highly valued for its speed, agility, and stamina, making it
                    a popular choice for hunting and coursing. Rampur Greyhounds
                    are known for their short, smooth coat that comes in a
                    variety of colors including black, brindle, and fawn. They
                    are also characterized by their lean, muscular build and
                    long legs. In terms of temperament, the Rampur Greyhound is
                    loyal, intelligent, and highly energetic. They require
                    plenty of exercise and stimulation to keep them happy and
                    healthy and are best suited for active owners who can
                    provide them with plenty of opportunities to run and play.`,
    },
    {
      id: 5,
      imageSrc: "./images/Gaddi_dog1_480x480.jpg",
      title: "Gaddi Kutta",
      description: "Independent, Fearless, Intelligent",
      fullDescription: ` Gaddi Kutta, also known as Indian Panther Hound, is a
                        large and muscular breed originating from the Himalayan
                        region of India. They were originally bred as working
                        dogs for guarding and herding livestock. One interesting
                        fact about Gaddi Kuttas is that they are capable of
                        hunting large game, such as wild boar and deer. They are
                        loyal and protective of their family but can be wary of
                        strangers. They require firm and consistent training
                        from an experienced handler due to their natural
                        tendency to be dominant. Gaddi Kuttas are not
                        recommended for first-time dog owners or apartment
                        living due to their large size and need for space to
                        exercise.`,
    },
    {
      id: 6,
      imageSrc: "./images/Indian-Pariah_480x480.webp",
      title: "Indian Pariah Dog",
      description: "Intelligent, Adaptable, Loyal",
      fullDescription: ` The Indian Pariah Dog is an ancient breed that has been
                        around for thousands of years. This breed is often seen
                        as the Indian version of a street dog, but in reality,
                        it is a highly intelligent and loyal companion. The
                        Indian Pariah Dog is known for its strong survival
                        instincts and adaptability, making it a great pet for
                        those living in diverse environments. They are also
                        highly trainable and make excellent watchdogs due to
                        their alertness and protective nature. As a highly
                        social breed, they love to be around people and require
                        plenty of exercises and mental stimulation to stay happy
                        and healthy. Some interesting facts about this breed
                        include their ability to jump high and their strong
                        sense of smell.`,
    },
    {
      id: 7,
      imageSrc: "./images/Sinhala_Hound_480x480.jpg",
      title: "Sinhala Hound",
      description: "Alert, Intelligent, Independent",
      fullDescription: ` Sinhala Hound is a rare and ancient dog breed that is
                        believed to have originated in Sri Lanka. Also known as
                        the Sri Lankan Hound, this breed is highly valued by the
                        locals for its hunting skills and loyal companionship.
                        Sinhala Hounds are medium-sized dogs that are
                        well-muscled and have short, sleek coat that is usually
                        reddish-brown or black. Sinhala Hounds are highly
                        trainable but can also be stubborn at times. They make
                        great guard dogs and are fiercely protective of their
                        families.`,
    },
    {
      id: 8,
      imageSrc: "./images/Bakharwal_480x480.webp",
      title: "Kashmiri Sheep Dog (Bakharwal)",
      description: "Loyal, Protective, Brave",
      fullDescription: ` Bakharwal, also known as Kashmiri Bakharwal or Gujjar Dog,
                    is a large-sized breed that originated in the Kashmir region
                    of India. They were originally bred to protect and herd
                    livestock in the Himalayan Mountains. This breed has a thick
                    and dense coat, which helps them withstand harsh weather
                    conditions. Bakharwals are known for their loyalty, bravery,
                    and protectiveness toward their family. They are also
                    intelligent and trainable, but they can be stubborn at
                    times. Bakharwals require plenty of exercise and
                    socialisation to prevent destructive behaviour, and they
                    make great guard dogs due to their alertness and protective
                    nature.`,
    },
    {
      id: 9,
      imageSrc: "./images/indian-mastiff_1_480x480.webp",
      title: "Indian mastiff (Bully Kutta)",
      description: "Loyal, Protective, Independent ",
      fullDescription: ` The Indian Mastiff, also known as the Bully Kutta or
                    Pakistani Mastiff, is a large and powerful dog breed that
                    has been used for hunting, guarding, and fighting in India
                    and Pakistan for centuries. They are known for their
                    muscular build, broad head, and impressive strength. Despite
                    their intimidating appearance, they are known to be loyal,
                    devoted, and protective of their families. They can be
                    independent and strong-willed, so proper socialisation and
                    training are important. They are not recommended for
                    first-time dog owners due to their size and strength.`,
    },
    {
      id: 10,
      imageSrc: "./images/Tangkhul_hui_480x480.jpg",
      title: "Tangkhul Hui",
      description: "Energetic, Loyal, Fearless",
      fullDescription: `  Tangkhul Hui is a rare dog breed that originates from
                    Manipur, India. It is a medium-sized dog that was primarily
                    used for hunting wild game in the hilly regions of Manipur.
                    The breed is known for its high energy levels and endurance,
                    making it an excellent hunting companion. Tangkhul Hui has a
                    muscular build and a short coat that comes in a range of
                    colors, including black, brown, and brindle. They are
                    intelligent, loyal, and brave dogs that are fiercely
                    protective of their families. Tangkhul Hui is also known for
                    its high prey drive, so early socialisation and training are
                    essential.`,
    },
    {
      id: 11,
      imageSrc: "./images/8_aug_jonangi_480x480.webp",
      title: "Jonangi",
      description: "Loyal, Protective, Playful",
      fullDescription: ` Jonangi is an indigenous Indian dog breed, primarily found
                    in the region of Andhra Pradesh. The breed is well-known for
                    its hunting abilities, especially in waterfowl. Jonangi's
                    name is derived from the Telugu word 'Jonangi' which means
                    'quick in water.' The breed is recognised for its stamina,
                    agility, and obedience. These dogs have a muscular and
                    athletic build and are known for their unique, high-pitched
                    barking. These dogs require proper socialisation and
                    training to help them develop into well-behaved pets.`,
    },
    {
      id: 12,
      imageSrc: "./images/Pandikona_480x480.webp",
      title: "Pandikona",
      description: "Affectionate, Alert, Obedient",
      fullDescription: ` Pandikona is an ancient breed of dog that originated from
                    the region of Andhra Pradesh in India. These dogs are known
                    for their hardiness and are often used as hunting and guard
                    dogs. They have a muscular and sturdy build with a short,
                    smooth coat that is easy to maintain. Pandikona dogs are
                    highly intelligent and loyal, making them excellent
                    companions. They are also known to be protective and
                    courageous, which makes them good watchdogs. Despite their
                    protective nature, they are gentle with their family and
                    love to play with children.`,
    },
    {
      id: 13,
      imageSrc: "./images/Indian_Spitz_Dog_480x480.webp",
      title: "Indian Spitz",
      description: "Lively, Affectionate, Intelligent",
      fullDescription: ` Indian Spitz is small to a medium-sized breed of dog that is
                    popular in India due to its adorable looks and charming
                    personality. They have a thick, fluffy white coat that
                    requires regular grooming and sheds moderately throughout
                    the year. Interestingly, the Indian Spitz is not a
                    descendant of the German Spitz, as their name suggests, but
                    is believed to have originated from the Himalayan region.
                    Indian Spitz dogs are intelligent, and affectionate, and
                    make great companions for families and children. They have a
                    lively and playful nature and love to entertain their owners
                    with their antics. Indian Spitz dogs are adaptable to living
                    in apartments, but require regular exercise and mental
                    stimulation to stay healthy and happy. They are social dogs
                    and love to be around people, making them excellent family
                    pets.`,
    },
    {
      id: 14,
      imageSrc: "./images/2._Himalayan_sheep_dog_480x480.webp",
      title: "Himalayan Sheepdog",
      description: "Loyal, Protective, Intelligent",
      fullDescription: ` The Himalayan Sheepdog, also known as Bhutia, is a large and
                    powerful dog breed from the Himalayan region. They were
                    originally bred to guard livestock against predators in high
                    altitudes. Himalayan Sheepdogs are known for their loyalty
                    and protective nature towards their owners and their
                    property. They are also highly intelligent and have a strong
                    instinct to protect. Interestingly, they are one of the few
                    dog breeds that can tolerate extremely cold weather due to
                    their thick double coat. They are a great choice for people
                    who live in cold and harsh environments and are looking for
                    a protective and loyal companion.`,
    },
    {
      id: 15,
      imageSrc: "./images/8_aug_jonangi_480x480.webp",
      title: "Chippiparai",
      description: "Independent, Brave, Affectionate",
      fullDescription: ` The Chippiparai is an ancient breed of sighthound that
                    originated in Tamil Nadu. They are known for their slender
                    build, short coat, and athletic ability, which makes them
                    excellent hunting dogs. Chippiparais are also very
                    intelligent and loyal, making them great companions for
                    active families. They have a strong prey drive and are
                    typically not recommended for households with small pets.
                    They are known to be protective of their family and make
                    excellent watchdogs. Despite their hunting heritage,
                    Chippiparais have a calm and even temperament and are
                    generally good with children.`,
    },
  ];
  return (
    <div className="about">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          You Need to Know About The Indian Dogs
        </h1>
        <br />
        <img className="image" src="./images/img-1688375202405.webp" />
        <div className="col-lg-6 mx-auto">
          <h2 mb-4>(Your Favourite Desi Dogs)</h2>
        </div>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardData.map((card) => (
              <div className="col" key={card.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img
                      className="dogs-img img-fluid"
                      src={card.imageSrc}
                      alt={card.title}
                    />
                    <h2 className="card-text">{card.title}</h2>
                    <p>{card.description}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi-2 bi-chevron-down toggle-paragraph"
                      viewBox="0 0 16 16"
                      onClick={() => handleToggle(card.id)}
                      aria-label="toggle"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                    {visibleParagraphs[card.id] && (
                      <p className="hidden hiddenParagraph">{card.fullDescription}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
