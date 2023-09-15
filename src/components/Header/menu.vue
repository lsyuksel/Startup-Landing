<template>
    <div class="header-menu">
        <nav>
            <ul>
                <li class="active">
                    <a href="#">Home</a>
                </li>
                <li class="has-sub-category">
                    <a href="#">
                        Solutions
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.195" height="7.097" viewBox="0 0 12.195 7.097">
                                <path id="Path_3" data-name="Path 3" d="M966.326,71l4.683,4.683L975.692,71" transform="translate(-964.912 -69.586)" fill="none" stroke="#6d6e88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </i>
                    </a>
                </li>
                <li class="has-sub-category">
                    <a href="#">
                        Services
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.195" height="7.097" viewBox="0 0 12.195 7.097">
                                <path id="Path_3" data-name="Path 3" d="M966.326,71l4.683,4.683L975.692,71" transform="translate(-964.912 -69.586)" fill="none" stroke="#6d6e88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Feedback</a>
                </li>
            </ul>
            <div class="other-buttons">
                <div>
                    <a href="#" class="link-button border-btn">
                        Download App
                    </a>
                </div>
                <div>
                    <a href="#" class="link-button background-btn">
                        Download App
                    </a>
                </div>
            </div>
        </nav>
        <div class="openbox-container" @click="closeButton"></div>
        <div class="close-button d-lg-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="250px" height="250px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
        </div>
    </div>
</template>

<script setup>
    const closeButton = () => {
        document.querySelector(".header-menu").classList.toggle("actived");
    }
</script>