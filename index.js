const quotes = [
    {quote: '"Nothing is impossible. The word itself says I am possible!"',
     person: 'Audrey Hepburn'},
    {quote: '"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."',
     person: 'Lady Gaga'},
    {quote: '"There is nothing impossible to they who will try."',
     person: 'Alexander the Great'},
    {quote: '"The bad news is time flies. The good news is you\'re the pilot."',
     person: 'Michael Altshuler'},
    {quote: '"Life has got all those twists and turns. You\'ve got to hold on tight and off you go."',
     person: 'Nicole Kidman'},
    {quote: '"Keep your face always toward the sunshine, and shadows will fall behind you."',
     person: 'Walt Whitman'},
    {quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
     person: 'Winston Churchill'},
    {quote: '"You don\'t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."',
     person: 'Mandy Hale'},
    {quote: '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
     person: 'Ralph Waldo Emerson'},
    {quote: '"I\'m not going to continue knocking that old door that doesn\'t open for me. I\'m going to create my own door and walk through that."',
     person: 'Ava DuVernay'},
    {quote: '"Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong."',
     person: 'Ella Fitzgerald'}
];

const text = document.getElementById('text');
const source = document.getElementById('person');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[random].quote;
    source.textContent = quotes[random].person;
});