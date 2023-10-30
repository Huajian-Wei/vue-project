<template>
    <div class="user-center">
        <div class="sidebar">
            <ul>
                <li>个人信息</li>
                <li>订单历史</li>
                <li>收货地址</li>
                <li>设置</li>
            </ul>
        </div>
        <div class="content">
            <h2>个人信息</h2>
            <div class="user-info">
                <div class="details">
                    <p>用户名：weihuajian</p>
                    <p>邮箱：whj@qq.com</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
.user-center {
    display: flex;
    margin-top: 30px;
    height: 500px;
}

h2 {
    font-weight: bold;
    text-align: center;
}

.sidebar {
    flex: 0 0 100px;
    background-color: rgba(141, 138, 138, 0.3);
    padding: 20px;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin-bottom: 10px;
    cursor: pointer;
}

.content {
    flex: 1;
    padding: 20px;

    background-color: rgba(77, 68, 68, 0.3);
}

.user-info {
    display: flex;
    align-items: center;
}

.details {
    flex: 1;
    margin-bottom: 10px;
    padding: 10px;
}
</style>
  