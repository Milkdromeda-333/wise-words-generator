const quotes = [
  "Maybe it's not about the happy ending. Maybe it's about the story.",
  "Everything you want is on the other side of fear.",
  "Do the things you fear and fear losses control over you.",
  "Our hearts of stone become hearts of flesh when we learn where the outcast weeps.",
  "Every saint has a past, and every sinner has a future. -- Oscar Wilde",
  "Life is not a matter of holding good cards, but of playing a poor hand well. -- Robert Louis Stevenson",
  "Life shrinks or expands in proportion to one’s courage. -- Anaïs Nin",
  "Human salvation lies in the hands of the creatively maladjusted. ~ Martin Luther King, Jr.",
  "Of course I'm out of my mind, it's dark and scary in there!",
  "There are nights when the wolves are silent and only the moon howls. --George Carlin",
  "Love takes off the masks that we fear we cannot live without and know we cannot live within. --James Baldwin",
  "What gets us into trouble is not what we don’t know. It’s what we know for sure that just ain’t so. -Mark Twain",
  "Holding onto your anger is like drinking poison and expecting the other person to die. --Buddha",
  "It’s not that I’m so smart. It’s just that I stay with problems longer. --Albert Einstein"
];

function myFunction() {
  const num = Math.floor(Math.random() * 14);
  const selectedQuote = quotes[num];
  return document.getElementById('paragraph').innerHTML = selectedQuote;
}

document.getElementById("btn").addEventListener("click", myFunction);