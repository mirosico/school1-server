declare type GradeNumber = '5' | '6' | '7' | '8' | '9' | '10' | '11';
type Slot = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Day = 0 | 1 | 2 | 3 | 4;

interface Time {
  day: Day;
  slot: Slot;
}
