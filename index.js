/**
 * QUICK SORT
 * Алгоритм
 * 1. Выбрать опорный элемент
 * 2. Разделить массив на два подмассива: элементы больше и меньше опорного.
 * 3. Рекурсивно применить сортировку к двум подмассивам.
 *
 */

/**
 * Выбираем опорный элемент из массива. Может быть любой.
 *
 * Проходим по массиву и делим его на две части:
 * в первый массив кладем все элементы котор. меньше опорного,
 * во втрой - элементы, котор больше опорного.
 *
 * Применяем имеющийся алгоритм для уже сформированного подмассива.
 *
 * Повторяем до тех пор, пока не наступит базовый случай,
 * при котором не нужно ничего сортировать.
 */

const test = [3, 1, 7, 2, 11, 4, 12, 5, 0];
const testA = [2];

/// Вариант 1 - Реализация алгоритма с созданием подмассива
const quickSort = (array) => {
  /// массив состоит из одного элемента
  /// это базовый случай
  if (array.length < 2) {
    return array;
  }

  /// pivot - опорный элемент
  const pivot = array[0];
  /// в less будем добавлять элементы, значение которых будут меньше значения опорного элемента pivot
  const less = [];
  /// в greater будем добавлять элементы, значение которых будут больше значения опорного элемента pivot
  const greater = [];

  /// i = 1 - т.к. для опорного элемента pivot выбрали первый элемент массива
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  console.log(less, pivot, greater);

  /**
   * Сначала завершится рекурсия по quickSort(less)
   * pivot - после первого прохода станет по середине
   * в конце закончатся рекурсии по quickSort(greater)
   */
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

/// Вариант 2 - Реализация алгоритма быстрой сортировки с перестановкой элементов

console.log(quickSort(test)); ///
