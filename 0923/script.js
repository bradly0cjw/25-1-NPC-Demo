// 確保在 DOM 結構完全載入後再執行腳本
document.addEventListener('DOMContentLoaded', () => {
    // 獲取需要操作的元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 檢查按鈕是否存在
    if (themeToggleButton) {
        // 為按鈕添加點擊事件監聽器
        themeToggleButton.addEventListener('click', () => {
            // 切換 body 元素上的 'light-mode' class
            // classList.toggle() 會自動判斷：
            // 如果 class 存在，就移除它；如果不存在，就新增它。
            body.classList.toggle('light-mode');
        });
    }
});
