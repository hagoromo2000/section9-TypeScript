const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice2 = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <h1>練習問題2:返却値の型指定</h1>
      <button onClick={onClickPractice2}>練習問題2を実行</button>
    </div>
  );
};

export default Practice2;
