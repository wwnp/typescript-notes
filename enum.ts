// enum лучше структирурует код есл есть однотипные элементы; сходжие со словарем
enum Membership {
  Simple,
  Standard,
  Premium
}
const membership =Membership.Standard
const membershipReverse =Membership[2]
// console.log(membership); // 1
// console.log(membershipReverse); // Premium

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}
const social = SocialMedia.INSTAGRAM
// console.log(social); // INSTAGRAM
 
enum Direction0 {
  Up = 1,
  Down,
  Left,
  Right,
}
// console.log(Direction0.Up); // 1
// console.log(Direction0.Down); // 2

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
// console.log(Direction0.Up); // 0
// console.log(Direction0.Down); // 1
